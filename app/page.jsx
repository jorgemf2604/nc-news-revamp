import Image from "next/image";
import Lizard from "@/public/images/lizard.png";

export default function Home() {
  return (
    <main className="pt-20">
      <div className="p-8 flex flex-col gap-4 items-center justify-center md:flex-row md:gap-16 max-w-7xl mx-auto">
        <div className="flex flex-col gap-10 items-center justify-center">
          <h2 className="text-3xl font-semibold">What is Jorge Dev?</h2>
          <div className="bg-black text-white text-base max-w-xl p-6 rounded-lg leading-6">
            Jorge Dev is a blog where diverse interests converge, creating a
            vibrant and dynamic community of like-minded individuals who
            appreciate the finer things in life: great food, thrilling sports,
            and the power of code. It is a one-stop destination that celebrates
            the many facets of life&#39;s passions, all in one place.
          </div>
          <button className="nav-button text-xl">See Articles</button>
        </div>
        <div className="mt-10">
          <Image
            src={Lizard}
            width={220}
            alt="ink drawing of a lizard climbing"
          />
        </div>
      </div>
    </main>
  );
}
