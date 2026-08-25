import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const appRoot = path.resolve(__dirname, '..', '..');
const siteRoot = path.join(appRoot, 'site');
const gameRoot = path.join(appRoot, 'game-dist');
const assetsRoot = path.join(appRoot, 'assets');

export function buildApp() {
  const app = Fastify({ logger: true });

  app.get('/health', async () => ({ ok: true, service: 'g2d-server' }));
  app.get('/api/version', async () => ({ version: '0.1.0' }));

  app.register(fastifyStatic, {
    root: siteRoot,
    prefix: '/',
    wildcard: false,
  });

  app.register(fastifyStatic, {
    root: gameRoot,
    prefix: '/game/',
    decorateReply: false,
  });

  app.register(fastifyStatic, {
    root: assetsRoot,
    prefix: '/assets/',
    decorateReply: false,
  });

  app.get('/game', async (_request, reply) => reply.redirect('/game/'));

  return app;
}
