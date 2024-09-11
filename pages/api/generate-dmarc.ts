import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { policy, subdomainPolicy, percentage } = req.body;

    try {
      const record = `v=DMARC1; p=${policy}; sp=${subdomainPolicy}; pct=${percentage}; rua=mailto:dmarc-reports@example.com`;

      // Save the generated DMARC record to the database
      await prisma.generatedDmarcRecord.create({
        data: {
          policy,
          subdomainPolicy,
          percentage,
          record,
        },
      });

      res.status(200).json({ record });
    } catch (error) {
      console.error('Error generating DMARC record:', error);
      res.status(500).json({ error: 'Failed to generate DMARC record' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}