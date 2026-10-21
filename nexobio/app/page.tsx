import { ArrowUpRight, FlaskConical, Terminal } from 'lucide-react';
import { Badge, Card } from '@/components/ui/primitives';

// Este es el único punto de partida visual. Los productos se construyen en vivo.
export default function Home() {
  return (
    <main className="workspace">
      <header className="topbar">
        <span className="brand"><FlaskConical size={22} aria-hidden="true" /> NexoBio<span className="muted">/ workspace</span></span>
        <Badge>Simulación educativa</Badge>
      </header>
      <section className="canvas" aria-labelledby="title">
        <span className="terminal-mark"><Terminal size={30} aria-hidden="true" /></span>
        <p className="eyebrow">Un problema. Un agente. Un producto.</p>
        <h1 id="title">Todavía no hay un panel.<br /><span className="muted">Lo vamos a construir acá.</span></h1>
        <p className="lead">El entorno está listo. El trabajo empieza cuando definimos qué necesitamos y cómo vamos a comprobarlo.</p>
        <Card className="starting-point">
          <span className="eyebrow">Punto de partida</span>
          <p>Contexto y criterios en <code>specs/</code>. Datos sintéticos en <code>data/</code>. Instrucciones del agente en <code>AGENTS.md</code>.</p>
          <span className="muted inline-label">Sin lógica de ventas ni laboratorio implementada <ArrowUpRight size={16} aria-hidden="true" /></span>
        </Card>
      </section>
      <footer className="footer">Datos ficticios · Sin conexión a sistemas corporativos · Sin decisiones clínicas</footer>
    </main>
  );
}
