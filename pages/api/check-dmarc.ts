import { NextApiRequest, NextApiResponse } from 'next';
import dns from 'dns';
import { promisify } from 'util';
import { PrismaClient } from '@prisma/client';

const resolveTxt = promisify(dns.resolveTxt);
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { domain } = req.body;

    try {
      const records = await resolveTxt(`_dmarc.${domain}`);
      const dmarcRecord = records.flat().find((record) => record.startsWith('v=DMARC1'));

      if (dmarcRecord) {
        // Save the DMARC record to the database
        await prisma.dmarcRecord.create({
          data: {
            domain,
            record: dmarcRecord,
          },
        });

        res.status(200).json({ domain, dmarcRecord });
      } else {
        res.status(404).json({ error: 'No DMARC record found' });
      }
    } catch (error) {
      console.error('Error checking DMARC:', error);
      res.status(500).json({ error: 'Failed to check DMARC record' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}