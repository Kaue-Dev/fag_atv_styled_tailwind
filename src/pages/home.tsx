export function Home() {
  return (
    <div className="flex items-center justify-center gap-8 max-w-3xl mx-auto">
      <a href="/styled-components" className="bg-sky-600 text-zinc-100 text-2xl text-center font-medium p-4 rounded w-full transition-all ease-in-out hover:bg-sky-600/90">Style Components</a>
      <a href="/tailwindcss" className="bg-sky-600 text-zinc-100 text-2xl text-center font-medium p-4 rounded w-full transition-all ease-in-out hover:bg-sky-600/90">TailwindCSS</a>
    </div>
  )
}