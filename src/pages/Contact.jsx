const Contact = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <header className="max-w-3xl space-y-4">
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="text-lg text-anthracite/80">
          Besoin d’informations complémentaires, d’un devis ou d’une visite ? Notre équipe est à votre écoute pour répondre à toutes vos questions.
        </p>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-anthracite">Coordonnées</h3>
            <ul className="mt-4 space-y-3 text-sm text-anthracite/80">
              <li>
                <span className="font-medium text-anthracite">Adresse :</span> 15 Rue du Centre Musical, 26500 Bourg-lès-Valence
              </li>
              <li>
                <span className="font-medium text-anthracite">Téléphone :</span> 04 75 00 00 00
              </li>
              <li>
                <span className="font-medium text-anthracite">Email :</span> contact@cmbv.fr
              </li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-anthracite">Horaires d’accueil</h3>
            <ul className="mt-4 space-y-2 text-sm text-anthracite/80">
              <li>Lundi au vendredi : 9h00 - 12h00 / 14h00 - 19h00</li>
              <li>Samedi : 9h00 - 13h00</li>
              <li>Dimanche : fermé</li>
            </ul>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-lg">
          <iframe
            title="Centre Musical de Bourg-lès-Valence"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2868.495410443322!2d4.8975!3d44.9492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDU2JzU3LjEiTiA0wrA1MycyMS4wIkU!5e0!3m2!1sfr!2sfr!4v1615979275123!5m2!1sfr!2sfr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
