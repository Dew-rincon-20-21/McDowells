import React from 'react'
import { useStyles } from '../styles';

export default function Logo() {
    const styles = useStyles();
    return (
        <img src="/img/logo.png"
            alt="logotipo"
            className={styles.LargeLogo}></img>
    )
}
