export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  
  if (req.url === "/settle" || req.url.includes("settle")) {
    res.setHeader("Content-Type", "application/json");
    res.status(402).json({
      x402Version: 1,
      accepts: [{
        scheme: "exact",
        network: "eip155:84532",
        maxAmountRequired: "1000",
        asset: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
        payTo: "0xb01C4d5723ef3716a091e8D851AC9f8F78A9d88F",
        description: "x402 Pro Agent payment settlement",
        mimeType: "application/json",
        resource: "https://x402pro2.vercel.app/settle",
      }],
    });
    return;
  }

  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    x402Version: 1,
    name: "x402 Pro Agent",
    accepts: [{
      scheme: "exact",
      network: "eip155:84532",
      maxAmountRequired: "1000",
      asset: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
      payTo: "0xb01C4d5723ef3716a091e8D851AC9f8F78A9d88F",
      description: "x402 Pro Agent payment settlement",
      mimeType: "application/json",
      resource: "https://x402pro2.vercel.app/settle",
    }],
  });
}
