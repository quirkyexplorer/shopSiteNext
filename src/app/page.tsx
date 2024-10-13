import { prisma } from '@/prisma';
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import Carousel from './sections/Carousel';

export default async function Home() {

  const products = await prisma.product.findMany();

  console.log('products',products);

  return (
    <>
      <main className="flex flex-col">
      <Header></Header>
      <HeroSection></HeroSection>
      <Carousel products={products} ></Carousel>
      
      </main>
    </>
  );
}
