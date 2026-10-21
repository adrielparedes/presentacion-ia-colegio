from build_demos import put, ROOT
import shutil
css='''*{box-sizing:border-box}body{margin:0;background:#171717;color:#ececec;font:18px/1.5 system-ui,sans-serif}main{max-width:1200px;margin:auto;padding:48px 32px}a{color:#8de6cb}h1{font-size:48px;letter-spacing:-2px;margin:16px 0}h2{font-size:24px}.eyebrow{color:#8de6cb;text-transform:uppercase;font-size:13px;letter-spacing:3px}.muted{color:#b0b0b0}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin:30px 0}.card,section{background:#212121;border:1px solid #383838;border-radius:18px;padding:24px;margin:20px 0}.card{margin:0}.value{font-size:38px;display:block;letter-spacing:-1px}select,button{background:#303030;color:white;border:1px solid #666;border-radius:9px;padding:10px 18px;font:inherit;cursor:pointer}table{border-collapse:collapse;width:100%;font-size:16px}td,th{text-align:left;padding:14px 10px;border-bottom:1px solid #444}th{color:#aaa} .bar{height:14px;background:#8de6cb;border-radius:4px;min-width:1px}.bar.cost{background:#9fafff}.bars{display:grid;grid-template-columns:150px 1fr;gap:15px;align-items:center}.bad{color:#ffb2a7}.good{color:#8de6cb}footer{margin-top:32px;font-size:14px;color:#aaa}.banner{padding:20px;border-left:4px solid #ffb2a7;background:#352624;border-radius:10px} @media(max-width:700px){.grid{grid-template-columns:1fr}h1{font-size:36px}main{padding:20px}section{overflow:auto}}'''
def html(title,body,script):
 return '<!doctype html><html lang="es-AR"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+title+'</title><style>'+css+'</style><main><div class="eyebrow">NexoBio / Simulación educativa</div>'+body+'<footer>Datos sintéticos · Sin conexión a sistemas corporativos · Producto de referencia preparado antes de la charla.</footer></main><script type="module">'+script+'</script></html>'
put('demos/ventas/index.html',html('NexoBio · Panel comercial','''<h1>Más ventas ≠ más margen.</h1><p class="muted">Enero–abril de 2026 · Elegí una región y fijate qué cambia.</p><label>Región <select id="region"><option>Todas</option><option>Norte</option><option>Sur</option></select></label><div id="metrics" class="grid" aria-live="polite"></div><section><h2>Ingresos y margen bruto por producto</h2><p class="muted">Verde: ingresos netos · Violeta: margen bruto (€). Misma escala.</p><div id="chart" class="bars"></div></section><section><h2>De dónde salen los números</h2><table><thead><tr><th>Producto</th><th>Ingreso neto</th><th>Margen bruto</th><th>Margen %</th></tr></thead><tbody id="rows"></tbody></table></section><p id="finding" class="banner"></p><p class="muted">Margen bruto no es ganancia neta. No incluye gastos generales ni impuestos. Las devoluciones recuperan el costo íntegro en esta simulación.</p>''','''import {summarize} from './core.mjs';
const money=n=>new Intl.NumberFormat('es-ES',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(n);
try {
const data=await (await fetch('./data.json')).json();
function render(){
 const s=summarize(data,document.querySelector('#region').value);
 document.querySelector('#metrics').innerHTML=[['Ingreso neto',money(s.revenue)],['Margen bruto',money(s.margin)],['Margen ponderado',s.percent.toFixed(1)+'%']].map(([k,v])=>`<div class="card"><span class="muted">${k}</span><strong class="value">${v}</strong></div>`).join('');
 const max=Math.max(1,...s.items.map(p=>p.revenue));
 document.querySelector('#chart').innerHTML=s.items.map(p=>`<span>${p.product}</span><div><div class="bar" style="width:${p.revenue/max*100}%"></div><div class="bar cost" style="width:${p.margin/max*100}%;margin-top:6px"></div></div>`).join('');
 document.querySelector('#rows').innerHTML=s.items.map(p=>`<tr><td>${p.product}</td><td>${money(p.revenue)}</td><td>${money(p.margin)}</td><td>${p.percent.toFixed(1)}%</td></tr>`).join('');
 const top=[...s.items].sort((a,b)=>b.revenue-a.revenue)[0], profitable=[...s.items].sort((a,b)=>b.margin-a.margin)[0];
 document.querySelector('#finding').textContent=`${top.product} lidera en ingresos; ${profitable.product}, en margen bruto aportado. La decisión depende de qué queremos optimizar.`;
}
document.querySelector('#region').addEventListener('change',render);render();
}catch(e){document.querySelector('#finding').textContent='No se pudieron cargar los datos. Abrí esta página con npm start, no como file://.';console.error(e)}'''))
put('demos/laboratorio/index.html',html('NexoBio · Control de calidad','''<h1>Un gráfico no valida un experimento.</h1><p class="muted">Ensayo colorimétrico sintético · Absorbancia en unidades arbitrarias.</p><div id="status" class="banner" role="status"></div><section><h2>Media de las réplicas</h2><p class="muted">La altura no indica validez. Revisá controles, réplicas y CV.</p><div id="chart" class="bars"></div></section><section><h2>Revisión técnica</h2><table><thead><tr><th>ID</th><th>Réplicas</th><th>Media</th><th>CV</th><th>QC individual / causa</th></tr></thead><tbody id="rows"></tbody></table></section><button id="download">Descargar informe</button><p class="muted">CV máximo: 15%. Control positivo: 0,80–1,20. Blanco: ≤ 0,10. Desviación estándar muestral (n−1). No se imputan valores ausentes.</p><p class="bad">Simulación educativa. Sin inferencias biológicas, diagnósticas ni decisiones clínicas. La interpretación requiere controles conformes y revisión humana.</p>''','''import {evaluate} from './core.mjs';
try{
const [data,p]=await Promise.all(['data.json','protocolo.json'].map(async f=>(await fetch('./'+f)).json()));
const report=evaluate(data,p),fmt=n=>n===null?'No evaluable':n.toFixed(3);
document.querySelector('#status').textContent=report.status;
document.querySelector('#rows').innerHTML=report.items.map(r=>`<tr><td>${r.id}</td><td>${r.n}/3</td><td>${fmt(r.mean)}</td><td>${r.cv===null?'—':r.cv.toFixed(1)+'%'}</td><td class="${r.ok?'good':'bad'}">${r.ok?'QC individual conforme':r.reasons.join(' · ')}</td></tr>`).join('');
document.querySelector('#chart').innerHTML=report.items.map(r=>`<span>${r.id}</span><div class="bar" style="width:${Math.max(0,Math.min(100,(r.mean||0)/1.2*100))}%"></div>`).join('');
document.querySelector('#download').onclick=()=>{
const text=['NexoBio · DATOS SINTÉTICOS',report.status,'Protocolo: blanco ≤ 0.10; control positivo 0.80–1.20; CV ≤ 15%; n=3.',...report.items.map(r=>`${r.id}: n=${r.n}, media=${fmt(r.mean)}, CV=${r.cv===null?'no evaluable':r.cv.toFixed(1)+'%'}; ${r.ok?'QC individual conforme':r.reasons.join('; ')}`),'No interpretar resultados de esta ejecución. Solicitar revisión humana y valorar repetición según protocolo. Sin conclusiones biológicas ni diagnósticas.'].join('\\n');
const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='informe-qc-sintetico.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
};
}catch(e){document.querySelector('#status').textContent='Error al cargar. Usá npm start y abrí la URL local.';console.error(e)}'''))
for name in ['ventas','laboratorio']:
 target=ROOT/'respaldo'/name
 if target.exists(): shutil.rmtree(target)
 shutil.copytree(ROOT/'demos'/name,target)
print('Vistas y respaldos creados')
