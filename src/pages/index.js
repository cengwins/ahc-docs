import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/welcome">
            AHC Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <br/>
        <br/>
        <br/>
        <div className={styles.main}>
          <h2>Wireless Ad Hoc Cloud Computing, Learning and Experimentation Environment</h2>
          <p>
            We help researchers and students to create and manage their own wireless Ad Hoc Cloud Computing environment.
          </p>
          <p>
            AHC Experimentation Environment is developed by a group of students from METU as a senior project. It is an environment in which people can test their projects in a distributed environment. AHC Experimentation Environment eliminates the need for creating a test setup for experimenting with ad-hoc networks.
          </p>
          <p> 
            As the number of bandwidth-hungry applications, and consequently, the demand for communications increases, we have to densify networks by spatial multiplexing to overcome capacity limitations. Designing a scalable and dependable large-scale ad hoc cloud is a significant challenge. Beyond the dependability issues, management of the network is very cumbersome if legacy solutions are employed. A new design and management paradigm is required: this gap can is addressed with the AHC project, namely an ad hoc cloud computing framework.
          </p>
          <p>
            Ad Hoc computing framework is an experimentation framework that enables students and researchers to develop their simulation environments, run their experiments, and see the results of the experiments. With our scalable and distributed architecture, people worldwide are able to use our system, edit their environment, and help with their projects.
          </p>
          <br/>
        </div>
      </main>
    </Layout>
  );
}
