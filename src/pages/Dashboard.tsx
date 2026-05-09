import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '../firebase';
import { Button } from '../components/UI';
import styles from './Dashboard.module.css';

export const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/auth');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (err) {
      console.error('Failed to log out', err);
    }
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>Stitch</div>
        <nav className={styles.nav}>
          <a href="#" className={styles.active}>Overview</a>
          <a href="#">Projects</a>
          <a href="#">Components</a>
          <a href="#">Team</a>
          <a href="#">Settings</a>
        </nav>
        <div className={styles.userProfile}>
          <div className={styles.avatar}>
            {user?.email?.charAt(0).toUpperCase()}
          </div>
          <div className={styles.userInfo}>
            <p className={styles.userName}>{user?.email?.split('@')[0]}</p>
            <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
          </div>
        </div>
      </aside>

      <main className={styles.content}>
        <header className={styles.header}>
          <h1>Dashboard</h1>
          <Button size="small">+ New Project</Button>
        </header>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Total Projects</span>
            <span className={styles.statValue}>12</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Active Components</span>
            <span className={styles.statValue}>48</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Team Members</span>
            <span className={styles.statValue}>5</span>
          </div>
        </div>

        <section className={styles.recentProjects}>
          <h2>Recent Projects</h2>
          <div className={styles.projectList}>
            {[1, 2, 3].map((i) => (
              <div key={i} className={styles.projectCard}>
                <div className={styles.projectPreview}></div>
                <div className={styles.projectInfo}>
                  <h3>Project Omega {i}</h3>
                  <p>Last edited 2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
