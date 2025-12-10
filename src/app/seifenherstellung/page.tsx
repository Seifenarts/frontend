'use client'

import Image from 'next/image'

export default function SeifenherstellungPage() {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto space-y-12">
      {/* Intro Section */}
      <section className="bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Seifenherstellung – Handwerk, Duft und Kreativität
        </h1>

        <p className="text-gray-700 leading-relaxed">
          Jeder Seifenstrauß entsteht in liebevoller Handarbeit. Die einzelnen Seifenblüten werden
          aus hochwertigen, hautfreundlichen Rohstoffen gefertigt und anschließend farblich
          abgestimmt, modelliert und zu einem harmonischen Bouquet zusammengestellt.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Ich bestelle die Grundzutaten bei spezialisierten Herstellern: hautfreundliche
          Seifenbasis, kosmetische Pigmente, pflegende Öle und dezente Düfte. Anschließend forme ich
          jede Blüte einzeln, passe Farbverläufe an und gebe dem Bouquet seine endgültige Form.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Das Ergebnis ist ein dekoratives Kunstwerk, das nicht verwelkt und jahrelang Freude
          schenkt – ideal als Geschenk oder zur stilvollen Dekoration.
        </p>
      </section>

      {/* Fotos – 3 Frames */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Einblicke in den Herstellungsprozess
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Foto 1 */}
          <div className="relative w-full h-64 bg-white rounded-xl shadow-md overflow-hidden">
            <Image
              src="https://storage.googleapis.com/img_seifen/Screenshot_20.jpg" // заменишь на свои URL из Google Cloud
              alt="Seifenblüten Herstellung"
              fill
              className="object-cover"
            />
          </div>

          {/* Foto 2 */}
          <div className="relative w-full h-64 bg-white rounded-xl shadow-md overflow-hidden">
            <Image
              src="https://storage.googleapis.com/img_seifen/Screenshot_21.jpg"
              alt="Seifenfarbe mischen"
              fill
              className="object-cover"
            />
          </div>

          {/* Foto 3 */}
          <div className="relative w-full h-64 bg-white rounded-xl shadow-md overflow-hidden">
            <Image
              src="https://storage.googleapis.com/img_seifen/Screenshot_22.jpg"
              alt="Fertiges Bouquet"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
