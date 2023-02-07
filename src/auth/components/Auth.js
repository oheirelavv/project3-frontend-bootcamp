import React from 'react';
import styles from './auth.module.css';
import { Button } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';
import { Navbar } from '../../navbar/components/Navbar';

export function Auth() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  return (
    <>
      <Navbar />
      <Button className={styles.btn} onClick={loginWithRedirect}>
        Login
      </Button>

      <Button className={styles.btn} onClick={logout}>
        Logout
      </Button>
    </>
  );
}
