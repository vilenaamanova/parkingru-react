import Header from "../../components/header/Header.jsx";
import styles from './MapPage.module.css'
import Footer from "../../components/footer/Footer.jsx";

const MapPage = () =>{
    return(
        <div className={styles.form}>
            <Header title="Карта"/>
            <Footer/>
        </div>

    )
}
export default MapPage;