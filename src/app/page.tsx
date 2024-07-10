import { prisma } from '@/prisma';
import Header from "./home-page-components/Header";
import HeroSection from "./components/HeroSection";
import Carousel from './components/Carousel';

export default async function Home() {

  const products = await prisma.product.findMany();

  console.log(products)

  return (
    <>
      <main className="flex flex-col">
      <Header></Header>
      <HeroSection></HeroSection>
      <Carousel></Carousel>
      </main>
    </>
  );
}
