import Image from "next/image";
import { promises as fs } from 'fs';
import Gallery from "../app/Gallery";

interface MediaPaths {
  images: {
    drawings: string[];
    posters: string[];
    realistic: string[];
  };
  videos: {
    realistic: string[];
    anime: string[];
  };
}

async function fetchMediaPaths(): Promise<MediaPaths> {
  const file = await fs.readFile(process.cwd() + '/lib/assets.json', 'utf8');
  return JSON.parse(file);
}

export default async function Home() {
  const mediaPaths = await fetchMediaPaths();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-16 lg:p-24">
      <div className="relative z-[-1] flex flex-col justify-center items-center before:absolute before:h-[200px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[120px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[300px] sm:after:w-[150px] before:lg:h-[300px]">
        <div className="flex flex-col items-center sm:flex-row">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/Coca-Cola_logo.svg"
            alt="Next.js Logo"
            width={240}
            height={117}
            priority
          />
          <h1 className="m-2 sm:m-5 text-2xl sm:text-4xl">+</h1>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/k-pop.png"
            alt="K-pop Logo"
            width={240}
            height={117}
            priority
          />
        </div>
      </div>
      <Gallery mediaPaths={mediaPaths} />
    </main>
  );
}
