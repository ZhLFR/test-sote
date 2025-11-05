import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Accueil from './pages/Accueil.jsx';
import Enseignements from './pages/Enseignements.jsx';
import Orchestres from './pages/Orchestres.jsx';
import Actualites from './pages/Actualites.jsx';
import Galerie from './pages/Galerie.jsx';
import Apropos from './pages/Apropos.jsx';
import Contact from './pages/Contact.jsx';

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-lightgray text-anthracite">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/enseignements" element={<Enseignements />} />
          <Route path="/orchestres" element={<Orchestres />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
