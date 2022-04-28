
export const ImageGalleryItem = ({src, tags}) => {
    return (
        <li>
            <img src={src} alt={tags}/>
        </li>
    )
}
