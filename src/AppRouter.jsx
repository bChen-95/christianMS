import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import PageHome from './page/PageHome';
import PageAbout from './page/PageAbout';
import PageContact from './page/PageContact';

function AppRouter() {
return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" exact element={<PageHome/>}  />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/contact" element={<PageContact />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter
