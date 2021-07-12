import React from 'react'
import logo from '../../public/img/logo.jpg'
import shopifyPartner from '../../public/img/shopify-partner.svg'
import logomark from '../../public/img/logo-reveal.png'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
  <div className={styles.layout_wrapper} >
    <div className={styles.left} > 
      <h1 className={styles.title} >your site needs some electric maybe?</h1>
      <h6 className={styles.text}>We wire high voltage <em>Shopify</em> stores.</h6>
      <a className={styles.link} href="mailto:hello@electricmaybe.com">hello@electricmaybe.com</a>
    </div>
    <div className={styles.right} >
      <div className={styles.link_wrapper}>
        <a href="https://superfat.com/" target="_blank" className={styles.job_link}>SuperFat > </a>
        <a href="https://de.defacto.com/" target="_blank" className={styles.job_link}>DeFacto > </a>
        <a href="https://interioricons.com/" target="_blank" className={styles.job_link}>Interior Icons > </a>
        <a href="https://ascotandcharlie.com/" target="_blank"  className={styles.job_link}>Ascot and Charlie > </a>
        <a href="https://www.corneliajames.com/" target="_blank" className={styles.job_link}>Cornelia James > </a>
        <a href="https://www.strikeman.io/" target="_blank" className={styles.job_link}>Strikeman > </a>
        <a href="https://vancouverhairpinlegs.com/" target="_blank" className={styles.job_link}>Vancouver Hair Pin Legs ></a>
        <a href="https://mimselicious.com/" target="_blank" className={styles.job_link}>Mimselicious > </a>
        <a href="https://mystarrynight.com/" target="_blank" className={styles.job_link}>My Starry Night ></a>
        <a href="https://tumfort.com.au/" target="_blank" className={styles.job_link}>Tumfort ></a>
        <a href="https://dc.chocomarket.com/" target="_blank" className={styles.job_link}>Chocomarket ></a>
      </div>

      <img className={styles.img} src={shopifyPartner}></img>
      <img className={styles.img} src={logomark}></img>
    </div>
  </div>
  </>
)

export default Layout
