import Image from "next/image";
import Link from "next/link";
import image from "../../public/stock.png"

function Card(title) {
  return (
    <div className="border border-neutral-200 rounded-lg min-h-[17rem] overflow-hidden">
      <h3 className="pt-4 pb-10 px-5 font-bold text-base">
        {title}
      </h3>
      <Image
        src={image}
        alt="Placeholder Image"
        className="object-cover h-full"
      />
    </div>
  )
}

export default function Home() {
  return (
    <main className="text-neutral-500 px-60">
      {/* Hero */}
      <div className="py-20">
        <h1 className="text-[2.5rem] leading-tight pb-2">
          welcome to
          <br />
          <b className="text-[4rem] text-wine-800 font-bold">
            Guitar Roadmap
          </b>
        </h1>
        <p>
          Your ultimate guitar hub! Lessons, tips, and resources for all levels. <br />
          Choose your pathway to begin your journey of mastering the guitar.
        </p>
      </div>

      {/* Levels */}
      <section className="grid grid-cols-4 pb-20 gap-2">
        {/* Section Title */}
        <div>
          <h2 className="pb-4 text-wine-800 text-4xl font-medium">
            Levels
          </h2>
          <p className="text-pretty">
            For beginners or those unsure where to start
          </p>
        </div>

        {/* Cards */}
        {Card("Beginner")}
        {Card("Intermediate")}
        {Card("Advanced")}
      </section>

      {/* Topics */}
      <section className="grid grid-cols-4 pb-20 gap-2">
        {/* Section Title */}
        <div className="row-span-2">
          <h2 className="pb-4 text-wine-800 text-4xl font-medium">
            Topics
          </h2>
          <p className="text-pretty">
            For those who wish to explore and dive deeper into the world of guitar.
          </p>
        </div>

        {/* Cards */}
        {Card("Music Theory")}
        {Card("Technical Skill")}
        {Card("Fretboard Navigation")}
        {Card("Other")}
      </section>
    </main>
  );
}
