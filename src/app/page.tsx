import Image from "next/image";
import { prisma } from '@/prisma';

export default async function Home() {

  const products = await prisma.product.findMany();

  console.log(products)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     Hellow world
    </main>
  );
}
