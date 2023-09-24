import Image from "next/image";
import Footer from "./Footer";
import Header from "./Header";
import Portifolio from "./Portifolio";

import whatsapp from './assets/whatsapp.svg'
import Members from "./Members";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center flex-col bg-fundo">
      <Header />
      <Portifolio />
      <Members />
      <Footer />

      <a className="z-10" href="https://api.whatsapp.com/send?phone=55022988437546" target="_blank" rel="noopener noreferrer">
        <Image className="fixed right-6 bottom-6" src={whatsapp} alt="Whatsapp" />
      </a>
    </div>
  )
}
