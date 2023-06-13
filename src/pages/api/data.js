import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
    const jsonDirectory = path.join(process.cwd(), 'src', 'pages', 'api');
    const fileContents = await fs.readFile(jsonDirectory + '/inzi.json', 'utf8');
    res.status(200).json(fileContents);
}