import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { isAuthFalse, isAuthTrue } from '../redux/actions/isAuth';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const isAuth = useSelector((state) => state.isAuth);

  if (window.localStorage.getItem('token')) {
    !isAuth && dispatch(isAuthTrue);
  }

  const handleClickAuth = () => {
    if (window.confirm('Вы действительно хотите выйти?')) {
      window.localStorage.removeItem('token');
      navigate('/');
      dispatch(isAuthFalse);
    }
  };

  return (
    <div className='header'>
      <Link to='/'>
        <h1>BlogReact</h1>
      </Link>
      <Nav variant='pills'>
        <Nav.Item>
          <Nav.Link active={pathname === '/'} to='/' as={Link}>
            Главная
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link active={pathname === '/about'} to='/about' as={Link}>
            Обо мне
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          {isAuth ? (
            <Nav.Link active={pathname === '/profile'} to='/profile' as={Link}>
              Админка
            </Nav.Link>
          ) : (
            <Nav.Link active={pathname === '/login'} to='/login' as={Link}>
              Войти
            </Nav.Link>
          )}
        </Nav.Item>
        {isAuth && (
          <Button onClick={handleClickAuth} className='buttonLogout' variant='danger'>
            Выйти
          </Button>
        )}
      </Nav>
    </div>
  );
};
