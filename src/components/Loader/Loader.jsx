import React from 'react'
import styles from './styles/Loader.module.scss'

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}>
        <div className={styles.loaderInner}></div>
      </div>
    </div>
  )
}

export default Loader
