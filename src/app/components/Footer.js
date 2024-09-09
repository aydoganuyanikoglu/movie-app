import React from 'react'
import { footerLinks } from '../index.js'
import styles from '../styles/footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.footerContainerLeft}>
            <h1>{footerLinks[0].title}</h1>
            <ul>
                {footerLinks[0].links.map((link,index) => (
                <li
                key={index}
                >{link.name}</li>
            ))}
            </ul>
            
        </div>
        <div className={styles.footerContainerRight}>
            <h1>{footerLinks[1].title}</h1>
            <ul>
                {footerLinks[1].links.map((link,index) => (
                <li
                key={index}
                >
                    <img src={link.logo} alt={link.name} />
                    <p>{link.name}</p>
                </li>
            ))}
            </ul>
        </div>
        <div className={styles.footerCopyRight}>
            <div className={styles.copyRightLeft}>
                <span>Copyright</span>
                <img src="/copy-right.svg" loading='lazy' alt="copyright" />
                <span>2024. All rights are reserved.</span>
            </div>
            <div className={styles.copyRightRight}>
                <ul>
                    {footerLinks[2].links.map((link,index) => (
                        <li key={index}><img loading='lazy' src={link.logo} alt="" /></li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer