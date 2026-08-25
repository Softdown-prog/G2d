import Fastify from 'fastify';

export function buildApp() {
  const app = Fastify({ logger: true });

  app.get('/health', async () => ({ ok: true, service: 'g2d-server' }));

  app.get('/api/version', async () => ({ version: '0.1.0' }));

  return app;
}
