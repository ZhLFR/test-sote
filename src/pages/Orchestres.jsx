const ensembles = [
  {
    name: 'Orchestre Junior',
    schedule: 'Mercredi 17h30 - 19h00',
    description:
      'Pour les jeunes instrumentistes à partir de 10 ans. Répertoire adapté et progression collective.',
  },
  {
    name: 'Orchestre Symphonique',
    schedule: 'Jeudi 20h00 - 22h00',
    description:
      'Réunit élèves avancés et musiciens amateurs de la région. Concerts réguliers en Drôme-Ardèche.',
  },
  {
    name: 'Ensemble Jazz',
    schedule: 'Mardi 19h00 - 21h00',
    description:
      'Focus sur l’improvisation, les standards et la création collective.',
  },
  {
    name: 'Chorale Voix Mixtes',
    schedule: 'Lundi 19h30 - 21h30',
    description:
      'Répertoire moderne et classique, travail vocal accompagné par notre chef de chœur.',
  },
  {
    name: 'Atelier Musiques Actuelles',
    schedule: 'Samedi 10h00 - 12h00',
    description:
      'Groupes constitués selon les affinités musicales, coaching scénique et enregistrement de maquettes.',
  },
];

const Orchestres = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <header className="max-w-3xl space-y-4">
        <h2 className="text-4xl font-bold">Orchestres & ensembles</h2>
        <p className="text-lg text-anthracite/80">
          Des formations adaptées à chaque profil pour vivre le plaisir du jeu collectif, développer l’écoute et partager la scène.
        </p>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {ensembles.map((ensemble) => (
          <div
            key={ensemble.name}
            className="flex h-full flex-col justify-between rounded-3xl bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <div>
              <h3 className="text-2xl font-semibold text-anthracite">{ensemble.name}</h3>
              <p className="mt-2 text-sm font-medium text-anthracite/70">
                ⏰ {ensemble.schedule}
              </p>
              <p className="mt-3 text-sm text-anthracite/75">{ensemble.description}</p>
            </div>
            <a
              href="/contact"
              className="mt-6 inline-flex w-max rounded-full bg-anthracite px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-anthracite/90"
            >
              Rejoindre l’ensemble
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orchestres;
