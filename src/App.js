import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { FullPost } from './pages/FullPost';
import { NotFound } from './pages/NotFound';
import { Profile } from './pages/Profile';
import { UpdatePost } from './pages/UpdatePost';
import { getPosts } from './redux/actions/posts';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/post/:id' element={<FullPost />} />
        <Route path='/updatepost/:id' element={<UpdatePost />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
