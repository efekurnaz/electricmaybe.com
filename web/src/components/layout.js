import React from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
  <h1 className={styles.title} >your site needs some electric maybe?</h1>
  <h6 className={styles.text}>We wire high voltage Shopify stores.</h6>
  <div className={styles.link_wrapper}>
    <a href="https://interioricons.com/" target="_blank" className={styles.job_link}>Interior Icons > </a>
    <a href="https://ascotandcharlie.com/" target="_blank"  className={styles.job_link}>Ascot and Charlie > </a>
    <a href="https://www.corneliajames.com/" target="_blank" className={styles.job_link}>Cornelia James > </a>
    <a href="https://www.strikeman.io/" target="_blank" className={styles.job_link}>Strikeman > </a>
    <a href="https://vancouverhairpinlegs.com/" target="_blank" className={styles.job_link}>Vencouver Hair Pin Legs ></a>
    <a href="https://purelabelnutrition.com/" target="_blank" className={styles.job_link}>Pure Label Nutrition</a>
    <a href="https://mimselicious.com/" target="_blank" className={styles.job_link}>Mimselicious > </a>
    <a href="https://mystarrynight.com/" target="_blank" className={styles.job_link}>My Starry Night</a>
    <a href="https://tumfort.com.au/" target="_blank" className={styles.job_link}>Tumfort</a>
    <a href="https://dc.chocomarket.com/" target="_blank" className={styles.job_link}>Chocomarket</a>
  </div>

  <a className={styles.link} href="mailto:hello@electricmaybe.com">hello@electricmaybe.com</a>
  </>
)

export default Layout
