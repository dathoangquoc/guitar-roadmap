import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-gray-500 px-60">
      {/* Hero */}
      <div className="py-20">
        <h1 className="text-[2.5rem] text-wrap line">
          welcome to
          <br />
          <b className="text-[4rem] text-wine-800 font-bold">
            Guitar Roadmap
          </b>
        </h1>
        <p>
          Your ultimate guitar hub! Lessons, tips, and resources for all levels.
          Choose your pathway to begin your journey of mastering the guitar.
        </p>
      </div>

      {/* Levels */}
      <section className="pb-20">
        <h2 className="text-wine-800 text-4xl">
          Levels
        </h2>
        <p>
          For beginners or those unsure where to start
        </p>

        {/* Boxes */}
        <div>

        </div>
      </section>

      {/* Topics */}
    </main>
  );
}
