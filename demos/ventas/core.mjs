export function summarize(rows, region = 'Todas', month = 'Todos') {
  const selected = rows.filter(r => (region === 'Todas' || r.region === region) && (month === 'Todos' || r.month === month));
  const products = new Map();
  for (const r of selected) {
    for (const key of ['units','returned','price','cost']) if (!Number.isFinite(r[key]) || r[key] < 0) throw new Error(`Dato inválido: ${key}`);
    if (r.returned > r.units) throw new Error('Devoluciones mayores que ventas');
    const p = products.get(r.product) || {product:r.product, revenue:0, cost:0, units:0};
    p.units += r.units-r.returned;
    p.revenue += (r.units-r.returned)*r.price;
    p.cost += (r.units-r.returned)*r.cost;
    products.set(r.product,p);
  }
  const items = [...products.values()].map(p => ({...p, margin:p.revenue-p.cost, percent:p.revenue ? (p.revenue-p.cost)/p.revenue*100 : 0}));
  const revenue = items.reduce((s,p)=>s+p.revenue,0), cost=items.reduce((s,p)=>s+p.cost,0);
  return {items, revenue, cost, margin:revenue-cost, percent:revenue ? (revenue-cost)/revenue*100 : 0};
}
