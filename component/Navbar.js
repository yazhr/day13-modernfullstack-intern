"use client";

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import styles from './styles/navbar.module.css';

export function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        InterV2
      </Link>
      <div className={styles.navItems}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        {session ? (
          <>
            <span className={styles.navLink}>
              Welcome, {session.user.name}
            </span>
            <button 
              className={styles.signOutButton} 
              onClick={() => signOut({ callbackUrl: '/login' })}
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link href="/login" className={styles.navLink}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
