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
      <h6 className={styles.text}>We build premium <em>Shopify</em> <a href="https://themes.shopify.com/themes/aisle/styles/grocery">themes</a> and custom stores.</h6>
      <a className={styles.link} href="https://electricmaybesupport.zendesk.com/">Aisle Theme Help Center</a>
      <a className={styles.link} href="mailto:hello@electricmaybe.com">hello@electricmaybe.com</a>
    </div>
  </>
)

export default Layout
