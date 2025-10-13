'use client';

import type { JSX } from "react";

export default function Page(): JSX.Element {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-start gap-8 p-8 bg-white">
        <img src="ana.jpg" alt="Ana" className="w-48 h-64 object-cover shadow-lg rounded-md" />
        <div className="max-w-2xl space-y-4">
          <h1 className="text-3xl font-bold">Willkommen in meiner warmen und kreativen Welt!</h1>
          <p>Mein Name ist Ana, ich komme aus der Republik Moldawien und lebe seit 2019 in Deutschland. Dieser Umzug war nicht nur ein Ortswechsel, sondern auch der Beginn eines neuen Kapitels in meinem Leben.</p>
          <p>Meine Leidenschaft für Seifenblumen begann 2021, in einer besonderen Zeit: Ich war junge Mutter mit einem Kleinkind, mitten in den Einschränkungen der Pandemie. Ich spürte die Notwendigkeit, mich wiederzufinden. Wie viele Frauen nach der Geburt eines Kindes stellte ich mir Fragen: Wer bin ich jetzt? Wie kann ich mich entwickeln? Wie kann ich etwas tun, das Freude, Sinn und vielleicht auch ein Einkommen bringt?</p>
          <p>Ich hatte das Gefühl, in einem Kreislauf festzustecken, aber tief innen glomm ein Funke, der darauf wartete, entfacht zu werden. So entdeckte ich die Kunst der Seifenblumen. Alles begann aus Neugier und dem Wunsch, etwas Schönes zu schaffen… und seitdem kann ich nicht mehr aufhören.</p>
          <p>Jeder Strauß, den ich kreiere, ist ein Stück meiner Seele. In meiner Werkstatt erlaube ich mir zu träumen, zu spielen mit Farben, Formen und Düften und Emotionen in kleine Kunstwerke zu verwandeln. Dieses Hobby schenkte mir innere Harmonie, Erfüllung und Inspiration.</p>
          <p>Auf dieser Website finden Sie Seifensträuße jeder Größe und Farbe. Jeder Strauß ist einzigartig, so wie wir Menschen. Manchmal verliebe ich mich so sehr in eine Komposition, dass ich sie wiederhole – nicht aus Routine, sondern aus dem Wunsch, diese Schönheit mit anderen zu teilen.</p>
          <p>Vielen Dank für Ihren Besuch. Ich hoffe, dass Sie neben den Farben und Düften auch die Herzenswärme spüren, die ich in jeden Strauß lege 🌿</p>
        </div>
      </section>

      <section className="p-8 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Werkstatt & Prozess</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <img src="workshop1.jpg" alt="Arbeitsprozess" className="rounded shadow-md" />
          <img src="workshop2.jpg" alt="Arbeitsprozess" className="rounded shadow-md" />
        </div>
      </section>

      <section className="p-8 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Für Sie</h2>
        <p className="text-gray-700">Vielen Dank, dass Sie hier vorbeischauen. Ich hoffe, Sie spüren die Herzenswärme, die ich in jeden Strauß lege 🌿</p>
      </section>
    </>
  );
}
