'use client'

import Image from 'next/image'
import type { JSX } from 'react'

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Photo */}
          <div className="relative w-60 h-80 lg:w-72 lg:h-[420px] flex-shrink-0">
            <Image
              src="https://storage.googleapis.com/img_seifen/Screenshot_19.jpg"
              alt="Anna"
              fill
              className="object-cover rounded-xl shadow-xl"
            />
          </div>

          {/* Text */}
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-800">
              Willkommen in meiner warmen und kreativen Welt
            </h1>

            <p className="text-gray-700 leading-relaxed">
              Mein Name ist Ana, ich komme aus der Republik Moldawien und lebe seit 2019 in
              Deutschland. Dieser Umzug war nicht nur ein Ortswechsel, sondern der Beginn eines
              neuen Kapitels in meinem Leben.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Die Leidenschaft für Seifenblumen entdeckte ich 2021 während einer besonderen und
              herausfordernden Zeit. Als junge Mutter mitten in der Pandemie suchte ich nach einer
              Möglichkeit, mich neu zu finden, kreativ zu sein und etwas Sinnvolles mit meinen
              Händen zu erschaffen.
            </p>

            <p className="text-gray-700 leading-relaxed">
              So begann meine Reise mit den Seifenblumen. Jeder Strauß, den ich kreiere, trägt ein
              Stück meiner Seele. Farben, Formen und Düfte zu kombinieren und Emotionen in kleine
              Kunstwerke zu verwandeln – das erfüllt mich mit Freude und innerer Ruhe.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Auf dieser Website finden Sie handgefertigte Seifensträuße in verschiedenen Größen und
              Stilen. Jeder Strauß ist einzigartig, genau wie die Menschen, für die ich sie mache.
            </p>

            <p className="text-gray-700 leading-relaxed font-medium">
              Vielen Dank für Ihren Besuch. Mögen Sie nicht nur die Farben und Düfte genießen,
              sondern auch die Herzenswärme spüren, die ich in jedes Werk einfließen lasse 🌿
            </p>
          </div>
        </div>
      </section>

      {/* Workshop / Process Section */}
      <section className="py-16 px-6 lg:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Meine Werkstatt und der kreative Prozess
        </h2>

        {/* Grid with 3 vertical GIFs */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="w-full flex justify-center">
            <Image
              src="https://storage.googleapis.com/img_seifen/chrome_sEjtLnNCHH.gif"
              alt="Workshop animation 3"
              width={260}
              height={100}
              className="rounded-2xl shadow-lg w-[260px] h-auto object-cover"
            />
          </div>
          <div className="w-full flex justify-center">
            <Image
              src="https://storage.googleapis.com/img_seifen/chrome_eA2pfK1llx.gif"
              alt="Workshop animation 2"
              width={260}
              height={100}
              className="rounded-2xl shadow-lg w-[260px] h-auto object-cover"
            />
          </div>
          <div className="w-full flex justify-center">
            <Image
              src="https://storage.googleapis.com/img_seifen/chrome_ZUMMyXn9rj.gif"
              alt="Workshop animation 1"
              width={260}
              height={100}
              className="rounded-2xl shadow-lg w-[260px] h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-14 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Für Sie</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Ich freue mich, dass Sie hier sind. Möge jeder Strauß, den Sie auswählen, ein bisschen
          Freude, Wärme und Inspiration schenken 🌿✨
        </p>
      </section>
    </main>
  )
}
