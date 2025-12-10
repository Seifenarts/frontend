'use client'

import Image from 'next/image'

export default function KontaktPage() {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto space-y-12">
      {/* Kontakt-Karte */}
      <section className="bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-8">
        {/* Foto */}
        <div className="relative w-56 h-72 md:w-64 md:h-80 flex-shrink-0 mx-auto md:mx-0">
          <Image
            src="https://storage.googleapis.com/img_seifen/Screenshot_18.jpg"
            alt="Ana Tarlev"
            fill
            className="object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Textblock */}
        <div className="flex flex-col justify-center space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Ich freue mich auf Ihre Nachricht oder Ihren Besuch in meiner kleinen Seifenwerkstatt.
          </p>

          <div className="space-y-1 text-gray-800 leading-relaxed">
            <p className="font-semibold text-lg">Adresse</p>
            <p>
              Anna Tarlev <br />
              Oberer Grifflenberg 83 <br />
              42119 Wuppertal
            </p>
          </div>

          <div className="pt-2 space-y-1">
            <p className="font-semibold text-lg text-gray-800">Telefon</p>
            <a href="tel:+4915151713068" className="text-blue-600 text-lg hover:underline">
              +49 1515 1713068
            </a>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Anfahrt</h2>

        <div className="rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2536.229392612098!2d7.150082176647079!3d51.24761992610995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8d6c6114eaa95%3A0x9513a17b43a42e2e!2sOberer%20Grifflenberg%2083%2C%2042119%20Wuppertal!5e0!3m2!1sde!2sde!4v1700000000000"
            width="100%"
            height="400"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  )
}
