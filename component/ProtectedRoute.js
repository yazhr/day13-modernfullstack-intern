"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function ProtectedRoute({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const isLoading = status === 'loading';

  useEffect(() => {
    if (!isLoading && !session) {
      router.push('/login');
    }
  }, [isLoading, session, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return children;
}
