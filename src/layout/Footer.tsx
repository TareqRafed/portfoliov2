import githubLogo from '../assets/github.gif';
import twitterLogo from '../assets/twitter.gif';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={style.container}>
      <div>
        <div className={style.icons}>
          <a href="https://github.com/tareqrafed">
            <img
              alt="github pixel art animation"
              className={style.icon}
              src={githubLogo}
            ></img>
          </a>
          <a href="https://twitter.com/grgo6_">
            <img
              alt="twitter pixel art animation"
              className={style.icon}
              src={twitterLogo}
            ></img>
          </a>
        </div>
        <p>© {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
