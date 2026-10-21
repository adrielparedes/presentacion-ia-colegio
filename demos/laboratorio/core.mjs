export function stats(values) {
  const valid = values.filter(v=>typeof v === 'number' && Number.isFinite(v));
  const n=valid.length, mean=n ? valid.reduce((a,b)=>a+b,0)/n : null;
  const sd=n>1 ? Math.sqrt(valid.reduce((s,v)=>s+(v-mean)**2,0)/(n-1)) : null;
  return {n, mean, cv:mean>0 && sd!==null ? sd/mean*100 : null};
}
export function evaluate(rows,p) {
  const items=rows.map(r=>{
    const s=stats(r.values), reasons=[];
    if(s.n!==p.replicates || r.values.length!==p.replicates) reasons.push('Réplicas incompletas o número incorrecto');
    if(s.cv===null || s.cv>p.cvMax) reasons.push('CV no evaluable o superior al límite');
    if(r.kind==='blank' && (s.mean===null || s.mean>p.blankMax)) reasons.push('Blanco fuera de rango');
    if(r.kind==='positive' && (s.mean===null || s.mean<p.positiveMin || s.mean>p.positiveMax)) reasons.push('Control positivo fuera de rango');
    return {...r,...s,reasons,ok:reasons.length===0};
  });
  const controls=items.filter(r=>r.kind!=='sample');
  const controlsOk=controls.length===2 && controls.filter(r=>r.kind==='blank').length===1 && controls.filter(r=>r.kind==='positive').length===1 && controls.every(r=>r.ok);
  return {items,controlsOk,status:controlsOk?'QC global conforme · requiere revisión humana':'NO INTERPRETABLE · controles no conformes'};
}
