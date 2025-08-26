import { prisma } from '@/prisma';
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import Carousel from './sections/Carousel';
import About from "./sections/About";

export default async function Home() {

  // FIX ME: PRODUCTS CANNOT BE ANY  for safety define what the end up type will be 
  // GROWING OPPORTUNITY
  let products:any = [];
  let error: any = null;

  try {
    products = await prisma.product.findMany(); 
    // console.log('products',products);  FOR TESTING PURPOSES COMMENTED OUT
  } catch (e) {
    error = e;
    console.error("Error fetching products: ", error);
  }



  return (
    <>
      <main className="flex flex-col ">
      <Header></Header>
      <HeroSection></HeroSection>
      {/*  This technique is seen a lot  it asks for the products ? (display) :otherwise (display2) */}
      {products.length > 0 ? (
          <Carousel products={products}></Carousel>
        ) : (
          <p className="text-red-500 font-bold text-center my-8">
            Error fetching products. Please try again later.
          </p>
        )}
        
        <About/>
      </main>
    </>
  );
}
