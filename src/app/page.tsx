import { prisma } from '@/prisma';
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import Carousel from './sections/Carousel';

export default async function Home() {

  let products:any = [];
  let error: any = null;

  try {
    products = await prisma.product.findMany(); 
    console.log('products',products);
  } catch (e) {
    error = e;
    console.error("Error fetching products: ", error);
  }



  return (
    <>
      <main className="flex flex-col">
      <Header></Header>
      <HeroSection></HeroSection>
      {products.length > 0 ? (
          <Carousel products={products}></Carousel>
        ) : (
          <p className="text-red-500 font-bold text-center my-8">
            Error fetching products. Please try again later.
          </p>
        )}
      
      </main>
    </>
  );
}
