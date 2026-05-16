import { z } from 'zod';
import { router } from '@/lib/router';

const SettleSchema = z.object({
  amount: z.string().min(1).optional(),
});

export const POST = router
  .route({ path: 'settle' })
  .paid('0.001')
  .body(SettleSchema)
  .inputExample({ amount: '0.001' })
  .description('Settle a payment via x402 Pro Agent')
  .handler(async ({ body }) => {
    return {
      success: true,
      message: 'Payment settled via x402 Pro Agent',
      amount: body.amount || '0.001',
      asset: 'USDC',
      settledAt: new Date().toISOString(),
    };
  });
