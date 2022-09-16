import React from 'react';

import style from './Body.module.scss';

interface props {
  children: React.ReactNode;
}

export default function Body({ children }: props) {
  return <div className={style.container}>{children}</div>;
}
