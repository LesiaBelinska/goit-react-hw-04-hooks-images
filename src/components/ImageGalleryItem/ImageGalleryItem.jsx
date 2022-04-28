import s from "./ImageGalleryItem.module.css";

export const ImageGalleryItem = ({src, tags}) => {
    return (
        <li className={s.ImageGalleryItem}>
            <img className={s.Image} src={src} alt={tags}/>
        </li>
    )
}
