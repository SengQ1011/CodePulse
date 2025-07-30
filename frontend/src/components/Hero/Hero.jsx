import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Hero.module.scss';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContent}>
        <h1>{t('hero.title')}</h1>
        <h3>{t('hero.subtitle')}</h3>
        <p>
          {t('hero.description.main')} 
          <br />
          {t('hero.description.sub')}
        </p>
        <a href="#demo" className='cta-button'>{t('hero.cta')}</a>
      </div>
    </section>
  );
}

export default Hero;