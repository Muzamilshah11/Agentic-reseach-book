import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from '../../pages/homepage.module.css';

// Author Section Component
const AuthorSection = () => {
  return (
    <section className={styles.authorSection}>
      <div className="container">
        <div className="text--center">
          <Heading as="h2" className="text--light">About the Author</Heading>
          <p className="padding-horiz--md" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Created by Muzammil Shah, a passionate researcher and developer in the field of Agentic AI Systems
          </p>
          <div className="avatar avatar--vertical">
            <img
              className={styles.authorImage}
              src="/img/author.jpg"
              alt="Muzammil Shah"
            />
            <div className={styles.authorName}>Muzammil Shah</div>
            <div className={styles.authorTitle}>Agentic AI Researcher & Developer</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;