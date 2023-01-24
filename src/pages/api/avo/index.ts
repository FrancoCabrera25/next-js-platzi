import { NextApiRequest, NextApiResponse } from 'next';
import DB from '../../../database/db';

const allAvo = async (req: NextApiRequest, res: NextApiResponse) => {
    const db = new DB();

    const allEntry = await db.getAll();

    return res
        .status(200)
        .setHeader('Content-type', 'application/json')
        .json({ length: allEntry.length, data: allEntry });
};

export default allAvo;
