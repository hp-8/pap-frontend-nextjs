import DropList from "@/app/dropDownList/DropDownComponent";
import Header from "@/app/header/Header";
import Footer from "./footer/footer";
import styles from "./page.module.css";
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Paprika - By HP Creates</title>
        <meta name="description" content="This is a frontend task given by Paprika, completed by HP Creates." />
      </Head>
      
      <Header />
     
      <main className={styles.main}>
        <DropList />
      </main>
     
      <Footer />
    </div>
  );
}
