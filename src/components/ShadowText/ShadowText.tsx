/* eslint-disable react/jsx-key */
import style from './ShadowText.module.scss';

interface props {
  text: string;
}

const ShadowText = ({ text }: props) => {
  return (
    <>
      {text.split('').map((letter) => (
        <span className={style.effect}>{letter}</span>
      ))}
    </>
  );
};

export default ShadowText;
