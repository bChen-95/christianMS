import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import PageHome from './page/PageHome';
import PageAbout from './page/PageAbout';




function AppRouter() {
return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/christian-mechanic" exact element={<PageHome/>}  />
          <Route path="christian-mechanic/about" element={<PageAbout />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter
