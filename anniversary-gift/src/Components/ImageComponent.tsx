import { FC } from "react"
import Image from "../Data/Image"

interface Props {
    image: Image
    handleDescription: (image: Image) => void
}

const ImageComponent: FC<Props> = ({ image, handleDescription }) => {

    return (
        <div className="image">
            <img onClick={
                () => handleDescription(image)} 
                src={image.url} 
                alt={image.title} 
            />
        </div>
    )
}

export default ImageComponent