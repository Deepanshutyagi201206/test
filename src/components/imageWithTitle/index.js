import style from "./style.module.css"

const ImageWithTitle = ({ image, title }) => {

    return <div className={style.cardContaier}>
        <div className={style.imageContainer}>
            <img src={image} />
        </div>
        <p className={style.title}>{title}</p>
    </div>
}

export default ImageWithTitle