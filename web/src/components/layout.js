import React from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, companyInfo, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          ElectricMaybe | <a href="mailto:info@electricmeybe.com">info@electricmaybe.com</a>
        </div>
      </div>
    </footer>
  </>
)

export default Layout
