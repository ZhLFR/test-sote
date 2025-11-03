const instruments = [
  {
    name: 'Piano',
    description:
      'Cours individuels et ateliers d’accompagnement pour développer technique et interprétation.',
  },
  {
    name: 'Guitare & Basse',
    description:
      'Électrique ou acoustique, découvrez un enseignement progressif, du jeu en solo aux ensembles.',
  },
  {
    name: 'Cordes frottées',
    description:
      'Violon, alto, violoncelle : un apprentissage basé sur l’écoute, la posture et le répertoire.',
  },
  {
    name: 'Bois & Cuivres',
    description:
      'Flûte, clarinette, saxophone, trompette… Une pédagogie collective pour maîtriser souffle et justesse.',
  },
  {
    name: 'Batterie & Percussions',
    description:
      'Travail du rythme, coordination et improvisation dans des studios dédiés.',
  },
  {
    name: 'Chant & Voix',
    description:
      'Coaching vocal individuel, chorales enfants et adultes, préparation scénique.',
  },
  {
    name: 'Musiques actuelles',
    description:
      'Ateliers de groupes rock, pop, jazz et MAO encadrés par nos professionnels.',
  },
  {
    name: 'Éveil musical',
    description:
      'Initiation ludique pour les 4-6 ans : percussions, chant, jeux sonores et découverte des familles d’instruments.',
  },
];

const Enseignements = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <header className="max-w-3xl space-y-4">
        <h2 className="text-4xl font-bold">Nos enseignements</h2>
        <p className="text-lg text-anthracite/80">
          Une offre complète alliant cours individuels, pratiques collectives et ateliers thématiques pour accompagner chaque musicien selon ses envies et son niveau.
        </p>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {instruments.map((instrument) => (
          <div
            key={instrument.name}
            className="rounded-3xl bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-anthracite">{instrument.name}</h3>
            <p className="mt-3 text-sm text-anthracite/75">{instrument.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enseignements;
