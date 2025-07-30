import React from 'react';
import styles from './Audience.module.scss';

function Audience() {
  return (
    <section className={styles.audience} id="audience">
      <div className='container'>
        <h2 className='section-title'>適用對象</h2>
        
        <div className={styles.audienceGrid}>
          <div className={styles.audienceCard}>
            <div className={styles.audienceIcon}>🔰</div>
            <h3>程式初學者</h3>
            <p>剛開始學習程式設計的小白，想要深入理解程式的執行邏輯與運作方式</p>
          </div>
          
          <div className={styles.audienceCard}>
            <div className={styles.audienceIcon}>🐛</div>
            <h3>需要除錯的工程師</h3>
            <p>專業程式開發者，需要更直觀的工具來分析和除錯複雜的程式邏輯</p>
          </div>
          
          <div className={styles.audienceCard}>
            <div className={styles.audienceIcon}>🎓</div>
            <h3>演算法學習者</h3>
            <p>正在學習資料結構與演算法的學生和工程師，需要視覺化工具輔助理解</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Audience;
