import { prisma } from '@/prisma';
import Header from "./home-page-components/Header";
import HeroSection from "./components/HeroSection";

export default async function Home() {

  const products = await prisma.product.findMany();

  console.log(products)

  return (
    <>
      <main className="">
      <Header></Header>
      <HeroSection></HeroSection>
      </main>
    </>
  );
}
