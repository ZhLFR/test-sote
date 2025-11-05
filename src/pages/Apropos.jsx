const Apropos = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <header className="max-w-3xl space-y-4">
        <h2 className="text-4xl font-bold">À propos du centre</h2>
        <p className="text-lg text-anthracite/80">
          Une histoire de passionnés, de pédagogues et de bénévoles réunis autour de la transmission musicale sur le territoire de Bourg-lès-Valence.
        </p>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6 text-sm leading-relaxed text-anthracite/80">
          <p>
            Fondé en 1978, le Centre Musical de Bourg-lès-Valence a pour mission de rendre la pratique musicale accessible à tous. Aujourd’hui, plus de 35 enseignants y partagent leur expertise, des musiques classiques aux musiques actuelles.
          </p>
          <p>
            Notre pédagogie s’appuie sur un accompagnement personnalisé, l’écoute active et la mise en situation scénique régulière. Chaque élève bénéficie d’un parcours sur mesure, alliant cours individuels, pratiques collectives et projets interdisciplinaires.
          </p>
          <p>
            Grâce à nos partenariats avec les structures culturelles locales, les élèves se produisent tout au long de l’année dans des salles renommées et participent à des collaborations artistiques ambitieuses.
          </p>
        </div>
        <div className="space-y-6 rounded-3xl bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-anthracite">Quelques chiffres</h3>
          <ul className="grid gap-4 text-sm">
            <li className="rounded-2xl bg-lightgray p-4">
              <span className="text-3xl font-bold text-anthracite">250+</span>
              <p className="mt-1 text-anthracite/70">Élèves accompagnés chaque année</p>
            </li>
            <li className="rounded-2xl bg-lightgray p-4">
              <span className="text-3xl font-bold text-anthracite">35</span>
              <p className="mt-1 text-anthracite/70">Enseignants et intervenants spécialisés</p>
            </li>
            <li className="rounded-2xl bg-lightgray p-4">
              <span className="text-3xl font-bold text-anthracite">12</span>
              <p className="mt-1 text-anthracite/70">Orchestres, ensembles et ateliers collectifs</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Apropos;
