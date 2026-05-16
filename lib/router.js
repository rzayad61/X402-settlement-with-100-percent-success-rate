import { createRouterFromEnv } from '@agentcash/router';

export const router = createRouterFromEnv({
  title: 'x402 Pro Agent',
  description: 'High-security autonomous x402 payment settlement agent with 100% success rate.',
  guidance: 'POST /api/settle with { amount: string }. Returns payment settlement confirmation.',
  strictRoutes: true,
});
