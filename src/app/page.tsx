import DropList from "@/app/dropDownList/DropDownComponent";
import Header from "@/app/header/Header";
import styles from "./page.module.css";



export default function Home() {
  return (
    <main className={styles.main}>  
      <Header/>
      <DropList/>
    </main>
  );
}
