import Image from "next/image";
import Lizard from "@/public/images/lizard2.webp";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-20 min-h-[calc(100vh-80px)] flex justify-center">
      <div className="p-8 flex flex-col gap-4 items-center justify-center md:flex-row md:gap-16 max-w-7xl mx-auto">
        <div className="flex flex-col gap-10 items-center justify-center">
          <h2 className="text-3xl font-semibold dark:text-black">
            What is Jorge Dev?
          </h2>
          <div className="bg-black text-white text-base max-w-xl p-6 rounded-lg leading-6">
            Jorge Dev is a blog where diverse interests converge, creating a
            vibrant and dynamic community of like-minded individuals who
            appreciate the finer things in life: great food, thrilling sports,
            and the power of code. It is a one-stop destination that celebrates
            the many facets of life&#39;s passions, all in one place.
          </div>
          <Link href="/articles">
            <button className="nav-button text-xl dark:text-black dark:bg-white">
              See Articles
            </button>
          </Link>
        </div>
        <div className="mt-10 relative w-[220px] h-[403px]">
          <Image
            src={Lizard}
            fill={true}
            alt="ink drawing of a lizard climbing"
            className="object-cover"
            sizes="(min-width: 980px) 220px, (min-width: 780px) 22.22vw, 220px"
          />
        </div>
      </div>
    </main>
  );
}
