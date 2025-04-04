import style from "./style.module.css"
import { ImageWithTitle } from "../../components"
import Footer from "./footer"
import Hero from "./hero"

const Home = () => {

    return <div className={style.loginPage}>
        <div className="container">
            <h1 className={style.ourWork}>Our Works</h1>
        </div>
        <Hero/>

        <div className={`${style.cardsContainer} container`}>
            <ImageWithTitle title={"Blood donation & medical camps"} image={"/assets/blood_donation.png"} />
            <ImageWithTitle title={"Food Distribution"} image={"/assets/food_distribution.png"} />
        </div>
        <div className={`${style.secondCardsContainer} container`}>
            <ImageWithTitle title={"Old age home"} image={"/assets/old_image.png"} />
            <ImageWithTitle title={"Helping  underprivilege"} image={"/assets/helping.png"} />
        </div>
        <Footer/>
    </div>
}

export default Home