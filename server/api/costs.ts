import db from '../utils/db.drizzle';
import { costsData } from '../../drizzle/schema';

export default defineEventHandler( async () => {
    const data = await db.select().from(costsData).limit(10);

    return {
        status: 200,
        data
    }
})