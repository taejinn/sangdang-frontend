import styles from 'styles/components/Footer/Footer.module.css'
import Container from './Container'

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.text}>
                    운영: 상당고등학교 학생자치회
                    <br />
                    개발: 상당고등학교 25회 졸업생 박태진
                    <br />
                    호스팅 서비스 제공: Vercel, Vultr, Cloudflare
                </div>
            </div>
        </>
    )
}

export default Footer
