import { envs } from '../../config/envs';
import { PrismaClient } from '../../generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ 

    connectionString : envs.POSTGRES_URL!,

});

export const prisma = new PrismaClient( { adapter });