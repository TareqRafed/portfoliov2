import cloudImg from '../../assets/cloud.png';
import ShadowText from '../../components/ShadowText/ShadowText';
import style from './Home.module.scss';

const Home = () => {
  return (
    <div className={style.container}>
      <div>
        <div>
          <h1>
            <ShadowText text="Random Engineer" />
          </h1>
        </div>
        <h1>
          <ShadowText text="Who is interested in building Software" />
        </h1>
      </div>
      <img className={style.artwork} alt="cloud" src={cloudImg} />
    </div>
  );
};

export default Home;
