import { PrismaClient } from '@prisma/client';

// Create a global instance only for development environments, so that hot reloading re-uses a single instance
// SOURCE: https://www.prisma.io/docs/guides/performance-and-optimization/connection-management#prevent-hot-reloading-from-creating-new-instances-of-prismaclient
// Prevents errors like
//    ```
//    Error querying the database: db error: FATAL: sorry, too many clients already
//    ```
// eslint-disable-next-line no-undef
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
	globalForPrisma.prisma ||
	new PrismaClient({
		log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
	});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export * from '@prisma/client';
