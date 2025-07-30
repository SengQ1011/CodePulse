import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '/images/codePulse_logo.png';

function MainHeader() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // 根據目前路徑来决定想要的样式
  // const getHeaderClassName = () => {
  //   switch (location.pathname) {
  //     case '/':
  //       return 'headerHome';
  //     default:
  //       return 'headerDefault';
  //   }
  // };

  return (
    // <header className={`${styles.header} ${styles[getHeaderClassName()]}`}>
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        <div className={styles.logo}>
          <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>
        
        <ul className={styles.navMenu}>
          <li><Link to="/" className={styles.active}>{t('home')}</Link></li>
          <li><Link to="/analysis">{t('features')}</Link></li>
          <li><a href="#demo">{t('demo')}</a></li>
          <li><a href="#docs">{t('docs')}</a></li>
          <li><a href="#about">{t('about')}</a></li>
        </ul>

        <div className={styles.languageSwitcher}>
          <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
            <option value="en">English</option>
            <option value="zh-TW">繁體中文</option>
            <option value="zh-CN">简体中文</option>
          </select>
        </div>
        
        <div className={styles.authButtons}>
          <Link to="/auth" className={styles.btnLogin}>{t('login')}</Link>
          <Link to="/auth" className={styles.btnRegister}>{t('register')}</Link>
        </div>
      </nav>
    </header>
  );
} 

export default MainHeader;
