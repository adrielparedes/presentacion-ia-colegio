import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {stats,evaluate} from '../demos/laboratorio/core.mjs';
const load=n=>JSON.parse(readFileSync(new URL('../demos/laboratorio/'+n,import.meta.url)));
const data=load('data.json'),p=load('protocolo.json');
test('desviación muestral y nulos no imputados',()=>{
 assert.equal(stats([1,2,3]).cv,50);assert.equal(stats([1,null,3]).n,2);
 assert.equal(stats([null,null]).mean,null);assert.equal(stats([0,0,0]).cv,null);
});
test('control positivo no conforme bloquea toda la ejecución',()=>{
 const r=evaluate(data,p);assert.equal(r.controlsOk,false);
 assert.equal(r.items.find(x=>x.id==='BLANCO').ok,true);
 assert.equal(r.items.find(x=>x.id==='CONTROL+').ok,false);
 assert.equal(r.items.find(x=>x.id==='M01').ok,true);
 assert.match(r.status,/NO INTERPRETABLE/);
});
test('detecta dispersión y réplica ausente por separado',()=>{
 const r=evaluate(data,p);assert.match(r.items.find(x=>x.id==='M02').reasons.join(),/CV/);
 assert.match(r.items.find(x=>x.id==='M03').reasons.join(),/incompletas/);
});
test('falta un control o está duplicado: bloquear',()=>{
 assert.equal(evaluate(data.filter(x=>x.kind!=='blank'),p).controlsOk,false);
 assert.equal(evaluate([...data,data[0]],p).controlsOk,false);
});
test('controles conformes en fixture separado, sin alterar datos de demo',()=>{
 const rows=structuredClone(data);rows.find(x=>x.kind==='positive').values=[0.99,1,1.01];
 assert.equal(evaluate(rows,p).controlsOk,true);
});
test('sensibilidad a CV no arregla el control fuera de rango',()=>{
 assert.equal(evaluate(data,{...p,cvMax:10}).controlsOk,false);
});
