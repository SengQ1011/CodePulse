import React from 'react';
import styles from './Features.module.scss';
import { useTranslation } from 'react-i18next';

function Features() {
  const {t} = useTranslation();

  return (
    <section className={styles.features} id="features">
      <div className='container'>
        <h2 className='section-title'>{t('features_section.title')}</h2>
        
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔍</div>
            <h3>{t('features_section.interactive_flowchart.title')}</h3>
            <p>{t('features_section.interactive_flowchart.description')}</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🧠</div>
            <h3>{t('features_section.memory_visualization.title')}</h3>
            <p>{t('features_section.memory_visualization.description')}</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📊</div>
            <h3>{t('features_section.smart_summary.title')}</h3>
            <p>{t('features_section.smart_summary.description')}</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⚡</div>
            <h3>{t('features_section.dynamic_tracking.title')}</h3>
            <p>{t('features_section.dynamic_tracking.description')}</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🎯</div>
            <h3>{t('features_section.breakpoint_system.title')}</h3>
            <p>{t('features_section.breakpoint_system.description')}</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🚀</div>
            <h3>{t('features_section.teaching_interface.title')}</h3>
            <p>{t('features_section.teaching_interface.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
