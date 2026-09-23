import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
const root=path.resolve('dist');
const base=(process.env.BASE_PATH || '/').replace(/\/$/,'');
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
const files=walk(root), pages=files.filter(f=>f.endsWith('.html')), errors=[];
let links=0,images=0;
for(const file of pages){
 const text=fs.readFileSync(file,'utf8');
 if((text.match(/<h1[ >]/g)||[]).length!==1) errors.push(`${file}: expected one h1`);
 if(!text.includes('name="description"')||!text.includes('property="og:title"')) errors.push(`${file}: missing metadata`);
 if(/<script\b/i.test(text)) errors.push(`${file}: unexpected client JavaScript`);
 for(const match of text.matchAll(/(?:href|src)="([^\"]+)"/g)){
  const value=match[1];if(/^(https?:|data:|mailto:)/.test(value))continue;
  const [pathname,hash]=value.split('#');
  if(pathname.startsWith('/')&&base&&!pathname.startsWith(base+'/'))errors.push(`${file}: missing deployment base ${value}`);
  const relative=base&&pathname.startsWith(base+'/')?pathname.slice(base.length):pathname;
  let target=pathname?path.join(root,relative.replace(/^\//,'')):file;
  if(pathname.endsWith('/'))target=path.join(target,'index.html');
  links++;
  if(!fs.existsSync(target)){errors.push(`${file}: broken ${value}`);continue;}
  if(hash&&target.endsWith('.html')&&!fs.readFileSync(target,'utf8').includes(`id="${hash}"`))errors.push(`${file}: missing anchor ${value}`);
 }
 for(const match of text.matchAll(/<img\b[^>]*>/g)){images++;if(!/alt="[^\"]+"/.test(match[0]))errors.push(`${file}: missing image alt`);}
}
const banned=files.filter(f=>/\.(pptx|docx|pdf|gif|csv)$/i.test(f)||/source-review|image\d+\./.test(f));
if(banned.length)errors.push(...banned.map(f=>`Unexpected private source candidate: ${f}`));
const home=fs.readFileSync(path.join(root,'index.html'));
console.log(JSON.stringify({pages:pages.length,localReferences:links,imageReferences:images,clientJavaScriptFiles:files.filter(f=>f.endsWith('.js')).length,totalBytes:files.reduce((n,f)=>n+fs.statSync(f).size,0),homeGzipBytes:zlib.gzipSync(home).length,errors},null,2));
if(errors.length)process.exit(1);
