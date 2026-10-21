import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {summarize} from '../demos/ventas/core.mjs';
const data=JSON.parse(readFileSync(new URL('../demos/ventas/data.json',import.meta.url)));
test('devoluciones, ingresos, costo y margen con valores calculados a mano',()=>{
 const s=summarize([{product:'A',region:'Norte',month:'2026-01',units:10,returned:2,price:100,cost:60}]);
 assert.equal(s.revenue,800);assert.equal(s.cost,480);assert.equal(s.margin,320);assert.equal(s.percent,40);
});
test('regiones particionan el total; margen porcentual ponderado',()=>{
 const all=summarize(data),n=summarize(data,'Norte'),s=summarize(data,'Sur');
 assert.equal(all.revenue,n.revenue+s.revenue);assert.equal(all.margin,n.margin+s.margin);
 assert.equal(all.percent,all.margin/all.revenue*100);
});
test('mayores ventas no equivalen a mayor margen',()=>{
 const {items}=summarize(data);
 assert.equal([...items].sort((a,b)=>b.revenue-a.revenue)[0].product,'BioKit A');
 assert.notEqual([...items].sort((a,b)=>b.margin-a.margin)[0].product,'BioKit A');
});
test('filtros combinados y selección vacía',()=>{
 const subset=data.filter(r=>r.region==='Norte'&&r.month==='2026-01');
 assert.deepEqual(summarize(data,'Norte','2026-01'),summarize(subset));
 assert.equal(summarize(data,'Inexistente').percent,0);
});
test('rechaza devoluciones imposibles y valores no numéricos',()=>{
 assert.throws(()=>summarize([{units:1,returned:2,price:1,cost:1}]));
 assert.throws(()=>summarize([{units:1,returned:0,price:NaN,cost:1}]));
});
