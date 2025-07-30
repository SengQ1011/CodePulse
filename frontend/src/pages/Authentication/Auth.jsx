import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LoginForm from '../../components/Auth/LoginForm';
import SignupForm from '../../components/Auth/SignupForm';
import styles from './Auth.module.scss';

function AuthPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('login');

  const showTab = (tab) => {
    setActiveTab(tab);
  };

  const handleLoginSubmit = (formData) => {
    console.log('Login form:', formData);
    // TODO: 實作登入 API 呼叫
  };

  const handleSignupSubmit = (formData) => {
    console.log('Signup form:', formData);
    // TODO: 實作註冊 API 呼叫
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.tabs}>
        <button 
          className={`${styles.tabButton} ${activeTab === 'login' ? styles.active : ''}`}
          onClick={() => showTab('login')}
        >
          {t('login')}
        </button>
        <button 
          className={`${styles.tabButton} ${activeTab === 'signup' ? styles.active : ''}`}
          onClick={() => showTab('signup')}
        >
          {t('register')}
        </button>
      </div>

      <div className={styles.formContainer}>
        {activeTab === 'login' && (
          <LoginForm onSubmit={handleLoginSubmit} />
        )}

        {activeTab === 'signup' && (
          <SignupForm onSubmit={handleSignupSubmit} />
        )}
      </div>
    </div>
  );
}

export default AuthPage;
