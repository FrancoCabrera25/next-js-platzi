import { NextApiRequest, NextApiResponse } from 'next';
import DB from '../../../database/db';

const AvoDetail = async (req: NextApiRequest, res: NextApiResponse) => {
    const db = new DB();

    const avoId = req.query.id as string;

    if (!avoId) {
        return res
            .status(400)
            .setHeader('Content-type', 'application/json')
            .json({ message: 'bad request parametro id no encontrado' });
    }

    try {
        const avo = await db.getById(avoId);

        if (!avo) {
            return res
                .status(404)
                .setHeader('Content-type', 'application/json')
                .json({ message: `Avo no encontrado con el id: ${avoId}` });
        }

        return res
            .status(200)
            .setHeader('Content-type', 'application/json')
            .json({ data: avo });
    } catch (error) {
        console.log('error', error);
        return res
            .status(500)
            .setHeader('Content-type', 'application/json')
            .json({ message: 'internal error' });
    }
};

export default AvoDetail;
