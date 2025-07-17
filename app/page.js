"use client";

import { useSession } from 'next-auth/react';
import { ProtectedRoute } from '@/component/ProtectedRoute';
import styles from './styles/home.module.css';

export default function Home() {
  const { data: session } = useSession();

  return (
    <ProtectedRoute>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to InterV2 Dashboard</h1>
        
        <div className={styles.card}>
          {session && (
            <div className={styles.userInfo}>
              {session.user?.image && (
                <img 
                  src={session.user.image} 
                  alt="Profile" 
                  className={styles.avatar} 
                />
              )}
              <div>
                <div className={styles.userName}>{session.user?.name}</div>
                <div className={styles.userEmail}>{session.user?.email}</div>
              </div>
            </div>
          )}
          
          <p className={styles.welcomeMessage}>
            This is a protected page. You can only see this content if you're logged in.
            The navbar above includes a sign-out button that will log you out and redirect you to the login page.
          </p>
        </div>
      </div>
    </ProtectedRoute>
  );
}
