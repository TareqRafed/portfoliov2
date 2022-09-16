import { Link, useLocation } from 'react-router-dom';

import headerImg from '../assets/header.png';
import style from './Header.module.scss';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className={style.header}>
      <Link to="/">
        <img alt="tariq rafid logo" className={style.logo} src={headerImg} />
      </Link>
      <ul>
        <li className={style.menu}>
          <a href="https://blog.tareqrafed.com">Blog</a>
        </li>
        <Link to="/projects">
          <li
            className={`${style.menu} ${pathname === '/projects' ? style.selected : ''}`}
          >
            Projects
          </li>
        </Link>
        <Link to="/contact">
          <li
            className={`${style.menu} ${pathname === '/contact' ? style.selected : ''}`}
          >
            Contact
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
