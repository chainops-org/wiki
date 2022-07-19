import React from 'react';
import styles from './IconButton.module.css';

export const IconButton = ({
  to,
  imgSrc,
  width = 32,
  height = 32,
  children,
}) => {
  return (
    <a href={to} className={styles.iconButton}>
      <img src={imgSrc} width={width} height={height} />
      <span>{children}</span>
    </a>
  );
};
