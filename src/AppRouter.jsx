import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import PageHome from './page/PageHome';
import PageAbout from './page/PageAbout';
import Footer from './components/Footer';



function AppRouter() {
return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" exact element={<PageHome/>}  />
          <Route path="/about" element={<PageAbout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter
