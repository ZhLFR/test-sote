const Footer = () => {
  return (
    <footer className="bg-anthracite text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold uppercase tracking-wide">
            Centre Musical de Bourg-lès-Valence
          </p>
          <p className="text-sm text-gray-300">
            15 Rue du Centre Musical, 26500 Bourg-lès-Valence
          </p>
        </div>
        <div className="text-sm text-gray-300">
          <p>Téléphone : 04 75 00 00 00</p>
          <p>Email : contact@cmbv.fr</p>
        </div>
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Centre Musical de Bourg-lès-Valence. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
