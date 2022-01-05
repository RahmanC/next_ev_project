import Link from 'next/link'
import { FaExclamationCircle } from 'react-icons/fa'
import Layout from '@/components/Layout'
import styles from '@/styles/404.module.css'

export default function ErrorPage() {
  return (
    <Layout title='Page Not Found'>
      <div className={styles.error}>
        <h1>
          <FaExclamationCircle style={{ color: 'red' }} /> 404
        </h1>
        <h4>Sorry, Page not found</h4>
        <Link href='/'>Go Back</Link>
      </div>
    </Layout>
  )
}
