import { fileURLToPath } from 'node:url';
import type { NextConfig } from 'next';
const root = fileURLToPath(new URL('.', import.meta.url));
const config: NextConfig = { devIndicators: false, turbopack: { root }, outputFileTracingRoot: root };
export default config;
