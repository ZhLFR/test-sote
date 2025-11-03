const news = [
  {
    title: 'Résultats du concours régional',
    date: 'Mars 2024',
    excerpt:
      'Félicitations à nos élèves de piano et de clarinette qui ont remporté trois premiers prix lors du concours régional des écoles de musique !',
  },
  {
    title: 'Nouveaux ateliers MAO',
    date: 'Février 2024',
    excerpt:
      'Découvrez nos ateliers de Musique Assistée par Ordinateur, ouverts aux ados et adultes souhaitant créer leurs propres productions.',
  },
  {
    title: 'Partenariat avec le théâtre local',
    date: 'Janvier 2024',
    excerpt:
      'Nos ensembles accompagneront plusieurs spectacles au théâtre de Bourg-lès-Valence. Répétitions et créations originales au programme.',
  },
];

const Actualites = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <header className="max-w-3xl space-y-4">
        <h2 className="text-4xl font-bold">Actualités du centre</h2>
        <p className="text-lg text-anthracite/80">
          Restez informés des dernières nouvelles, projets et réussites des élèves et des équipes pédagogiques.
        </p>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {news.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-anthracite/70">
              {item.date}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-anthracite">{item.title}</h3>
            <p className="mt-3 text-sm text-anthracite/75">{item.excerpt}</p>
            <a
              href="/contact"
              className="mt-4 inline-flex text-sm font-semibold text-anthracite transition-colors duration-200 hover:text-anthracite/70"
            >
              En savoir plus →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Actualites;
