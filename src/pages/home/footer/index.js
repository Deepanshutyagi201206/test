import style from "./style.module.css"

const Footer = () => {

    return <div className={`${style.footer} container`}>
        <div className={style.firstColumn}>
            <h1 className={style.footerHeading}>Stories Of
                Change</h1>
            <p className={style.footerDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
        </div>
        <div className={style.secondColumn}>
            <img src="/assets/jorney.png" />
            <div className={style.cardInfoContainer}>
                <p className={style.footerCardTitle}>A Journey of Hope and Support</p>
                <p className={style.footerCardDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                <button className={style.footerCta}>Read More</button>
            </div>
        </div>
        <div className={style.thirdColumn}>
            <img src="/assets/hope_and_support.png" />
            <div className={style.cardInfoContainer}>
                <p className={style.footerCardTitle}>A Journey of Hope and Support</p>
                <p className={style.footerCardDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                <button className={style.footerCta}>Read More</button>
            </div>
        </div>
    </div>

}

export default Footer