import { listPDFs } from '../../server';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const pdfs = await listPDFs();
      res.status(200).json({ pdfs });
    } catch (error) {
      console.error("Error in API handler:", error);
      res.status(500).json({ error: 'Failed to list PDFs' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
