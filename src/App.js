import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import WorksPage from './pages/WorksPage/WorksPage';
import BlogPage from './pages/BlogPage/BlogPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';
import NotFoudPage from './pages/NotFoundPage/NotFoudPage';
import SingleWorkPage from './pages/SingleWorkPage/SingleWorkPage';
import { useEffect } from 'react';

function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (pathname === '/') {
      document.title = "BLOG"
    } else {
      document.title = `${pathname.slice(1).toUpperCase()}`
    }
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/works' element={<WorksPage />} />
        <Route path='/work/:id' element={<SingleWorkPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contacts' element={<ContactPage />} />
        <Route path='*' element={<NotFoudPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
