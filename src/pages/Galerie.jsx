const images = [
  'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1461783436728-0a9217714694?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=900&q=80',
];

const Galerie = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <header className="max-w-3xl space-y-4">
        <h2 className="text-4xl font-bold">Galerie</h2>
        <p className="text-lg text-anthracite/80">
          Moments de concerts, coulisses des répétitions et temps forts de la vie du centre capturés en images.
        </p>
      </header>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, index) => (
          <div
            key={src}
            className={`group relative overflow-hidden rounded-3xl bg-anthracite/5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
              index % 5 === 0 ? 'sm:col-span-2 lg:col-span-2' : ''
            }`}
          >
            <img src={src} alt={`Galerie ${index + 1}`} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galerie;
