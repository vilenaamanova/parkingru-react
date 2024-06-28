import styles from "./AddBalance.module.css"
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
const AddBalancePage = () => {
    return(
        <div className={styles.form}>
            <Header title='Add balance' />

            <Footer/>

        </div>

    )
}
export default AddBalancePage;