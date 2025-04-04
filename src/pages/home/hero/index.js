import style from "./style.module.css"

const Hero = () => {

    return <div className="container">
        <div className={style.heroSection}>
            <div className={style.heroLeftSection}>
                <img src="/assets/contribute.png" />
            </div>
            <div className={style.heroRightSection}>
                <p className={style.heroHeadig}>Helping Blind & leprosy patients</p>
                <p className={style.heroDescription}>Helping Blind & leprosy patientsLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <button className={style.cta}>Contribute</button>
            </div>
        </div>
    </div>

}

export default Hero