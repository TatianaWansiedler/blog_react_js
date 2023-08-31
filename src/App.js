import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import WorksPage from './pages/WorksPage/WorksPage';
import BlogPage from './pages/BlogPage/BlogPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';
import NotFoudPage from './pages/NotFoundPage/NotFoudPage';
import SingleWorkPage from './pages/SingleWorkPage/SingleWorkPage';

function App() {
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
