import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { Link } from 'gatsby'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'

import styles from './project.module.css'

function Project(props) {
  const { _rawBody, title, mainImage } = props
  return (
    <article className={styles.root}>
      {props.mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <a href="https://www.strikeman.io/" className={styles.siteNameLink}>
              <h1 className={styles.title}>{title}</h1>
            </a>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
        </div>
      </Container>
    </article>
  )
}

export default Project
