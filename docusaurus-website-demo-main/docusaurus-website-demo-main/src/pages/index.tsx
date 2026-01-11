import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import AuthorSection from '../components/AuthorSection/AuthorSection';
import styles from './homepage.module.css';

// Particle effect component
const ParticlesEffect = () => {
  return (
    <div className={styles.particlesContainer}>
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={styles.particle}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 10 + 2}px`,
            height: `${Math.random() * 10 + 2}px`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.5 + 0.1,
          }}
        />
      ))}
    </div>
  );
};

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <ParticlesEffect />
      <div className={styles.heroContainer}>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--secondary button--lg", styles.animatedButton)}
            to="/docs/intro">
            Explore Documentation
          </Link>
          <Link
            className={clsx("button button--primary button--lg", styles.animatedButton)}
            to="/docs/intro">
            Start Reading
          </Link>
        </div>
      </div>
    </header>
  );
}

// Enhanced Features Section
const EnhancedFeatures = () => {
  const features = [
    {
      title: 'Advanced AI Concepts',
      icon: '🧠',
      description: (
        <>
          Deep dive into cutting-edge agentic AI concepts, architectures, and implementations.
          Understand how autonomous agents think, plan, and execute complex tasks.
        </>
      ),
    },
    {
      title: 'Research-Driven Content',
      icon: '🔬',
      description: (
        <>
          Curated insights from the latest research papers, experiments, and breakthrough discoveries
          in the field of agentic AI systems.
        </>
      ),
    },
    {
      title: 'Practical Applications',
      icon: '⚙️',
      description: (
        <>
          Real-world examples and use cases demonstrating how agentic AI transforms industries,
          automates workflows, and solves complex problems.
        </>
      ),
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className="text--center padding-horiz--md">
          <Heading as="h2" className={clsx(styles.featureTitle, "margin-bottom--lg")} style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1a1a1a' }}>
            What You'll Discover
          </Heading>
          <p className="padding-horiz--md" style={{ fontSize: '1.2rem', color: '#2d3748', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: '1.7' }}>
            A comprehensive exploration of agentic AI systems, from foundational concepts to advanced implementations
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={clsx(styles.featureCard, "shadow--md")}>
              <div className={styles.featureIcon}>
                <span style={{ fontSize: '2.5rem' }}>{feature.icon}</span>
              </div>
              <Heading as="h3" className={styles.featureTitle}>
                {feature.title}
              </Heading>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Agentic AI Concept Diagram Section
const AgenticAIConceptDiagram = () => {
  return (
    <section className={styles.agenticAIDiagramSection}>
      <div className="container">
        <div className="text--center padding-top--lg">
          <Heading as="h2" className="text--light margin-bottom--lg">
            Understanding Agentic AI Architecture
          </Heading>
          <p className="padding-horiz--md" style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
            Visual representation of how agentic AI systems operate with perception, reasoning, planning, and execution capabilities
          </p>
        </div>

        <div className={styles.diagramContainer}>
          {/* Central Agent */}
          <div className={styles.centralAgent}>
            <div className={styles.agentCore}>Agentic AI Core</div>
            <div className={styles.agentSubtitle}>Self-directed Autonomous System</div>
          </div>

          {/* Periphery Components */}
          <div className={clsx(styles.component, styles.perception)}>
            <div className={styles.componentIcon}>👁️</div>
            <div className={styles.componentTitle}>Perception</div>
            <div className={styles.componentDesc}>Observe & Sense Environment</div>
          </div>

          <div className={clsx(styles.component, styles.reasoning)}>
            <div className={styles.componentIcon}>🧠</div>
            <div className={styles.componentTitle}>Reasoning</div>
            <div className={styles.componentDesc}>Analyze & Think Logically</div>
          </div>

          <div className={clsx(styles.component, styles.planning)}>
            <div className={styles.componentIcon}>📋</div>
            <div className={styles.componentTitle}>Planning</div>
            <div className={styles.componentDesc}>Strategize & Plan Actions</div>
          </div>

          <div className={clsx(styles.component, styles.execution)}>
            <div className={styles.componentIcon}>⚙️</div>
            <div className={styles.componentTitle}>Execution</div>
            <div className={styles.componentDesc}>Act & Interact</div>
          </div>

          <div className={clsx(styles.component, styles.memory)}>
            <div className={styles.componentIcon}>💾</div>
            <div className={styles.componentTitle}>Memory</div>
            <div className={styles.componentDesc}>Learn & Remember</div>
          </div>

          <div className={clsx(styles.component, styles.tools)}>
            <div className={styles.componentIcon}>🛠️</div>
            <div className={styles.componentTitle}>Tools</div>
            <div className={styles.componentDesc}>Utilize External Resources</div>
          </div>

          {/* Connecting Lines */}
          <div className={styles.connectionLine}></div>
          <div className={styles.connectionLine2}></div>
          <div className={styles.connectionLine3}></div>
          <div className={styles.connectionLine4}></div>
          <div className={styles.connectionLine5}></div>
          <div className={styles.connectionLine6}></div>
        </div>
      </div>
    </section>
  );
};

// Stats Section
const StatsSection = () => {
  const stats = [
    { number: '8+', label: 'Chapters' },
    { number: '50+', label: 'Concepts' },
    { number: '100+', label: 'Examples' },
    { number: '∞', label: 'Possibilities' },
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.statsGrid}>
        {stats.map((stat, idx) => (
          <div key={idx} className={styles.statItem}>
            <div className={styles.statNumber}>{stat.number}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};


// Wave Separator Component
const WaveSeparator = () => {
  return (
    <div className={styles.waveSeparator}>
      <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25" fill="currentColor"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5" fill="currentColor"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          fill="currentColor"></path>
      </svg>
    </div>
  );
};

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Comprehensive Documentation for Agentic AI Concepts">
      <HomepageHeader />
      <main>
        <EnhancedFeatures />
        <WaveSeparator />
        <AgenticAIConceptDiagram />
        <WaveSeparator />
        <StatsSection />
        <WaveSeparator />
        <AuthorSection />
      </main>
    </Layout>
  );
}
