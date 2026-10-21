import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
export const metadata: Metadata = {
  title: 'NexoBio · Del problema al producto',
  description: 'Un espacio de trabajo para construir con IA en vivo. Datos sintéticos.'
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="es-AR"><body>{children}</body></html>;
}
