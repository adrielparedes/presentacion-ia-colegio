import {browser,serve,root} from './browser.mjs';
import {mkdirSync,readFileSync,writeFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {summarize} from '../demos/ventas/core.mjs';
const server=await serve();let b;const errors=[],results=[];
mkdirSync(root+'verificacion',{recursive:true});
try{
 b=await browser();const page=await b.newPage({viewport:{width:1600,height:900},acceptDownloads:true});
 page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error'&&!m.text().includes('404'))errors.push(m.text())});
 page.on('request',r=>assert.ok(r.url().startsWith(server.url),'Dependencia externa: '+r.url()));
 await page.goto(server.url+'/presentacion/');
 assert.equal(await page.locator('.slide').count(),25);
 const contrast=await page.locator('.slide').evaluateAll(slides=>{
  const luminance=rgb=>rgb.slice(0,3).map(v=>{v/=255;return v<=0.04045?v/12.92:((v+0.055)/1.055)**2.4}).reduce((sum,v,i)=>sum+v*[0.2126,0.7152,0.0722][i],0);
  return slides.flatMap(slide=>[...slide.querySelectorAll('header,header span,.brand b,h1,.lead,article h3,article p,.card-num,code,footer')].map(el=>{
   let parent=el,bg;
   do{bg=getComputedStyle(parent).backgroundColor;parent=parent.parentElement}while(parent&&(bg==='transparent'||bg==='rgba(0, 0, 0, 0)'));
   const fg=luminance(getComputedStyle(el).color.match(/[\d.]+/g).map(Number));
   const back=luminance(bg.match(/[\d.]+/g).map(Number));
   return {slide:slide.id,element:el.tagName,ratio:(Math.max(fg,back)+0.05)/(Math.min(fg,back)+0.05)};
  }));
 });
 assert.ok(contrast.every(c=>c.ratio>=7),'Contraste de texto inferior a 7:1: '+JSON.stringify(contrast.filter(c=>c.ratio<7)));
 assert.equal(await page.locator('.active').evaluate(s=>getComputedStyle(s).backgroundColor),'rgb(255, 255, 255)');
 results.push('Paleta clara: fondo blanco y contraste de texto mínimo de 7:1 en las 25 diapositivas');
 for(const term of ['Prompt Engineering','Context Engineering','AI Agents','Harness Engineering','Loop Engineering']){
  assert.ok((await page.locator('#s4').textContent()).includes(term),`Falta término para investigar: ${term}`);
 }
 assert.equal(await page.locator('#s7 h1').textContent(),'Loop Engineering.');
 for(const [id,spec,prompt,route] of [['s12','02-ventas.md','prompt 1','/ventas'],['s17','03-laboratorio.md','prompt 3','/laboratorio']]){
  const code=await page.locator(`#${id} code`).textContent();
  assert.ok(code.includes(`nexobio/specs/${spec}`)&&code.includes(prompt)&&code.includes(`http://127.0.0.1:3000${route}`),'Contrato de construcción en vivo incorrecto: '+id);
  assert.ok(code.includes('npm run check && npm run build'));
  assert.ok(!code.includes('demos/')&&!code.includes('node --test'),'No mezclar comprobaciones estáticas con la construcción en vivo');
 }
 const guion=readFileSync(root+'GUION.md','utf8');
 assert.ok(guion.includes('## Antes de que llegue el público')&&guion.includes('## Recorrido de 55 minutos')&&guion.includes('## Notas por diapositiva'));
 results.push('Guion desde cero: specs, prompts 1/3, rutas 3000 y comprobaciones de nexobio coherentes');
 await page.screenshot({path:root+'verificacion/01-portada.png'});
 await page.keyboard.press('ArrowRight');assert.equal(await page.locator('.active').getAttribute('id'),'s2');
 for(const field of ['nombre','rol','trayectoria','diaADia']){
  assert.equal(await page.locator(`[data-profile="${field}"]`).textContent(),await page.evaluate(key=>window.PERFIL[key],field));
 }
 await page.screenshot({path:root+'verificacion/07-presentacion-personal.png'});
 await page.keyboard.press('n');assert.ok(await page.locator('.active .notes').isVisible());
 await page.keyboard.press('Escape');assert.equal(await page.locator('.active .notes').isVisible(),false);
 await page.goto(server.url+'/presentacion/#3');
 await page.screenshot({path:root+'verificacion/06-usos-ia.png'});
 await page.goto(server.url+'/presentacion/#12');
 await page.screenshot({path:root+'verificacion/09-ventas-desde-cero.png'});
 await page.goto(server.url+'/presentacion/#17');
 await page.screenshot({path:root+'verificacion/10-laboratorio-desde-cero.png'});
 await page.goto(server.url+'/presentacion/#6');
 await page.screenshot({path:root+'verificacion/02-harness.png'});
 await page.keyboard.press('End');assert.equal(await page.locator('.active').getAttribute('id'),'s25');
 await page.keyboard.press('Home');assert.equal(await page.locator('.active').getAttribute('id'),'s1');
 assert.equal(await page.locator('#s25 h1').textContent(),'¡Gracias!');
 assert.equal(await page.locator('#s25 .repo-qr figcaption a').getAttribute('href'),'https://github.com/adrielparedes/presentacion-ia-colegio');
 results.push('25 diapositivas; navegación por teclas, URL, inicio/fin y notas correctas');
 for(const viewport of [{width:1280,height:720},{width:1920,height:1080}]){
  await page.setViewportSize(viewport);
  for(let i=1;i<=25;i++){
   await page.goto(server.url+'/presentacion/#'+i);
   const fit=await page.locator('.active').evaluate(s=>{const c=s.querySelector('.content').getBoundingClientRect(),f=s.querySelector('footer').getBoundingClientRect();return c.bottom<=f.top+1&&s.scrollWidth<=s.clientWidth});
   assert.ok(fit,`Desbordamiento diapositiva ${i} en ${viewport.width}`);
  }
 }
 results.push('Maquetación HTML sin desbordamientos en 1280×720 y 1920×1080');
 for(const [preset,width,height] of [['4k',3840,2160],['1080p',1920,1080],['720p',1280,720],['480p',854,480]]){
  await page.setViewportSize({width,height});
  await page.locator('#legibility').selectOption(preset);
  for(let i=1;i<=25;i++){
   await page.goto(server.url+'/presentacion/#'+i);
   const fit=await page.locator('.active').evaluate(s=>{
    const c=s.querySelector('.content').getBoundingClientRect(),h=s.querySelector('header').getBoundingClientRect(),f=s.querySelector('footer').getBoundingClientRect();
    return c.top>=h.bottom-1&&c.bottom<=f.top+1&&s.scrollWidth<=s.clientWidth&&s.scrollHeight<=s.clientHeight;
   });
   assert.ok(fit,`Desbordamiento ${preset}, diapositiva ${i}`);
   assert.equal(await page.locator('.active article:visible').count(),await page.locator('.active article').count());
   if(i===25){
    assert.ok(await page.locator('.repo-qr img').evaluate(img=>img.complete&&img.naturalWidth>0),'El QR debe cargar desde un recurso local');
    await page.screenshot({path:root+`verificacion/08-gracias-${preset}.png`});
   }
   if(preset==='480p')assert.ok(await page.locator('.active article').evaluateAll(cards=>cards.every((card,i)=>i===0||card.getBoundingClientRect().top>=cards[i-1].getBoundingClientRect().bottom)),'Las tarjetas deben apilarse verticalmente');
  }
 }
 await page.goto(server.url+'/presentacion/#6');
 await page.keyboard.press('ArrowRight');
 assert.equal(await page.locator('.active').getAttribute('id'),'s7');
 await page.keyboard.press('ArrowLeft');
 assert.equal(await page.locator('.active').getAttribute('id'),'s6');
 await page.screenshot({path:root+'verificacion/05-legibilidad-480p.png'});
 await page.reload();
 assert.equal(await page.locator('#legibility').inputValue(),'480p');
 await page.emulateMedia({media:'print'});
 assert.equal(await page.locator('#s6 article:visible').count(),3);
 await page.emulateMedia({media:'screen'});
 await page.locator('#legibility').selectOption('1080p');
 assert.equal(await page.locator('.active article:visible').count(),3);
 results.push('Presets 4K/1080p/720p/480p sin desbordamientos; tarjetas verticales en 480p, sin divisiones, persistencia y tarjetas completas al imprimir');
 await page.setViewportSize({width:1600,height:900});
 for(const prefix of ['demos','respaldo']){
  await page.goto(`${server.url}/${prefix}/ventas/`);await page.locator('#rows tr').first().waitFor();
  assert.equal(await page.locator('#rows tr').count(),3);
  const before=await page.locator('#metrics').innerText();
  await page.locator('#region').selectOption('Norte');
  const after=await page.locator('#metrics').innerText();assert.notEqual(before,after);
  const data=JSON.parse(readFileSync(root+prefix+'/ventas/data.json'));
  const expected=summarize(data,'Norte');
  const money=n=>new Intl.NumberFormat('es-ES',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(n);
  assert.equal(await page.locator('.value').first().innerText(),money(expected.revenue));
  if(prefix==='demos')await page.screenshot({path:root+'verificacion/03-panel.png',fullPage:true});
  await page.goto(`${server.url}/${prefix}/laboratorio/`);await page.locator('#rows tr').first().waitFor();
  assert.match(await page.locator('#status').innerText(),/NO INTERPRETABLE/);assert.equal(await page.locator('#rows tr').count(),6);
  const pending=page.waitForEvent('download');await page.locator('#download').click();const download=await pending;
  const path=await download.path();const report=readFileSync(path,'utf8');assert.match(report,/NO INTERPRETABLE/);assert.match(report,/M03: n=2/);assert.ok(report.split('\n').length>=10);
  if(prefix==='demos'){await download.saveAs(root+'verificacion/informe-ejemplo.txt');await page.screenshot({path:root+'verificacion/04-laboratorio.png',fullPage:true});}
  results.push(prefix+': filtro de región, indicadores, QC, datos ausentes y descarga del informe correctos');
 }
 // Verificar tamaños de impresión y que el contenido no invada el pie.
 await page.goto(server.url+'/presentacion/');await page.emulateMedia({media:'print'});
 assert.equal(await page.locator('.slide').first().evaluate(s=>getComputedStyle(s).backgroundColor),'rgb(255, 255, 255)');
 const print=await page.locator('.slide').evaluateAll(ss=>ss.map((s,i)=>{const c=s.querySelector('.content').getBoundingClientRect(),f=s.querySelector('footer').getBoundingClientRect();return {slide:i+1,width:s.offsetWidth,height:s.offsetHeight,fit:c.bottom<=f.top+1}}));
 assert.ok(print.every(s=>s.fit),'Desbordamiento en modo impresión: '+JSON.stringify(print.filter(s=>!s.fit)));
 const pdf=readFileSync(root+'presentacion/presentacion.pdf');assert.equal([...pdf.toString('latin1').matchAll(/\/Type \/Page\b/g)].length,25);
 results.push('PDF: 25 páginas 16:9; contenido sin solapamientos en modo impresión');
 assert.deepEqual(errors,[]);
 writeFileSync(root+'verificacion/resultados.json',JSON.stringify({resultados:results,errores:errors},null,2));
 console.log(results.join('\n'));
}finally{await b?.close();server.close()}
