import DropList from "@/app/dropDownList/DropDownComponent";
import Header from "@/app/header/Header";
import Footer from "./footer/footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <DropList />
      </main>
      <Footer />
    </div>
  );
}
