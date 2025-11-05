import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/enseignements', label: 'Enseignements' },
  { to: '/orchestres', label: 'Orchestres' },
  { to: '/actualites', label: 'Actualités' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/apropos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  return (
    <header className="bg-anthracite text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-semibold uppercase tracking-wide">
            Centre Musical
          </h1>
          <p className="text-sm text-gray-200">Bourg-lès-Valence</p>
        </div>
        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium uppercase tracking-wide">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 transition-colors duration-200 ${
                      isActive
                        ? 'bg-white text-anthracite'
                        : 'text-gray-200 hover:bg-white/10'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
