import Image from "next/image";
import PartnerLogos from "./components/PartnerLogos";
import SubscribeForm from "./components/SubscribeForm";

export default function Home() {
  return (
<>
    <main className="bg-[url('/background.png')] bg-cover text-white h-dvh flex flex-col justify-between">
    <div className="flex flex-col items-center gap-2">
    <Image src="/logo.png" width={500} height={400} alt="AmeriMed Luxury Escapes Logo" className="w-[200px] h-[200px] md:w-[500px] md:h-fit"></Image>
      <h1 className="uppercase text-center font-semibold px-8 pb-1 border-[#AB8201] border-b-2 text-3xl md:text-7xl 2xl:text-7xl">work in progress...</h1>
      <p className="mt-1 text-xl md:text-3xl 2xl:text-4xl text-center font-medium">We're coming soon! We're working hard to give you the best experience!</p>
      <h2 className="text-xl md:text-3xl 2xl:text-4xl font-medium">Get notified when we launch</h2> 
      <SubscribeForm />
    </div>
      <PartnerLogos/>
    </main>
    </>

  );
}
