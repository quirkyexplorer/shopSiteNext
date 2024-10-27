import { prisma } from '@/prisma';
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import Carousel from './sections/Carousel';

export default async function Home() {

  let products:any = [];

  try {
    products = await prisma.product.findMany(); 
    console.log('products',products);
  } catch (error) {
    console.error("Error fetching products: ", error);
  }



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
