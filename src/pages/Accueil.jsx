import EventCard from '../components/EventCard.jsx';

const events = [
  {
    title: 'Concert de Printemps',
    date: '12 avril 2024',
    description:
      'Les orchestres junior et symphonique partagent un programme éclectique mêlant classique et musiques actuelles.',
    location: 'Auditorium de Bourg-lès-Valence',
  },
  {
    title: 'Portes ouvertes',
    date: '4 mai 2024',
    description:
      'Venez découvrir nos ateliers, rencontrer les professeurs et essayer votre instrument coup de cœur.',
    location: 'Centre Musical',
  },
  {
    title: 'Stage Jazz & Impro',
    date: '24-26 juin 2024',
    description:
      'Un stage intensif pour explorer le jazz et ses techniques d’improvisation accompagné par nos enseignants.',
    location: 'Studio 2',
  },
];

const Accueil = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-widest text-anthracite shadow">
            Excellence musicale & partage
          </span>
          <h2 className="text-4xl font-bold leading-tight text-anthracite">
            Une école de musique ancrée au cœur de Bourg-lès-Valence
          </h2>
          <p className="text-lg text-anthracite/80">
            Depuis plus de 40 ans, le Centre Musical accompagne enfants, adolescents et adultes dans leur pratique musicale. Orchestres, ateliers, cours individuels ou collectifs : nous mettons tout en œuvre pour faire résonner votre passion.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/enseignements"
              className="rounded-full bg-anthracite px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-anthracite/90"
            >
              Découvrir nos enseignements
            </a>
            <a
              href="/contact"
              className="rounded-full border border-anthracite px-6 py-3 text-sm font-semibold text-anthracite transition-colors duration-200 hover:bg-anthracite hover:text-white"
            >
              Nous rencontrer
            </a>
          </div>
        </div>
        <div className="relative h-full w-full overflow-hidden rounded-3xl bg-anthracite/90 p-1 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80"
            alt="Musiciens en répétition"
            className="h-full w-full rounded-[28px] object-cover"
          />
          <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-5 py-4 text-sm font-medium text-anthracite shadow-lg">
            +250 élèves accompagnés chaque année
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-semibold text-anthracite">Nos prochains événements</h3>
          <a
            href="/actualites"
            className="text-sm font-semibold text-anthracite transition-colors duration-200 hover:text-anthracite/70"
          >
            Voir toutes les actualités →
          </a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Accueil;
