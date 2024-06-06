import Link from "next/link";
import styles from './error.module.css'

export default function FourOhFour () {
    return(
    <div className={styles.container}>
        <h1> Oops ! There is nothing here </h1>
        <Link href='/'>
        
            Go back Home
        
        </Link>
    </div>    
    )
}
