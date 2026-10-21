import {browser,serve,root} from './browser.mjs';
import {mkdirSync,writeFileSync} from 'node:fs';
const server=await serve();let b;
try{
 b=await browser();const page=await b.newPage({viewport:{width:1600,height:900}});
 await page.goto(server.url+'/presentacion/',{waitUntil:'networkidle'});
 await page.evaluate(()=>document.fonts.ready);
 const count=await page.locator('.slide').count();const failures=[];
 for(let i=0;i<count;i++){
  await page.goto(server.url+'/presentacion/#'+(i+1));
  const overflow=await page.locator('.active').evaluate(s=>{
   const f=s.querySelector('footer').getBoundingClientRect(),c=s.querySelector('.content').getBoundingClientRect();
   return {horizontal:s.scrollWidth>s.clientWidth,vertical:c.bottom>f.top+1};
  });
  if(overflow.horizontal||overflow.vertical)failures.push({slide:i+1,...overflow});
 }
 if(failures.length)throw new Error('Desbordamiento: '+JSON.stringify(failures));
 await page.emulateMedia({media:'print'});
 await page.pdf({path:root+'presentacion/presentacion.pdf',preferCSSPageSize:true,printBackground:true,displayHeaderFooter:false});
 mkdirSync(root+'verificacion',{recursive:true});
 writeFileSync(root+'verificacion/exportacion.json',JSON.stringify({diapositivas:count,desbordamientos:failures,pdf:'presentacion/presentacion.pdf'},null,2));
 console.log(`PDF generado: ${count} diapositivas; sin desbordamientos en pantalla 1600×900.`);
}finally{await b?.close();server.close()}
