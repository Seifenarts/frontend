'use client'

export default function LanguagesPlaceholder() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Languages</h1>

      <p className="text-gray-600 max-w-md">
        Dieser Bereich wird gerade vorbereitet. Bald können Sie hier die Website in mehreren
        Sprachen nutzen.
      </p>

      <div className="mt-8 animate-pulse">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-[#be9f4b] rounded-full"></div>
      </div>

      <p className="text-sm text-gray-400 mt-4">Bitte schauen Sie später noch einmal vorbei.</p>
    </div>
  )
}
