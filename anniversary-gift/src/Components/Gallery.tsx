import { useState } from "react"
import Image from "../Data/Image"
import ImageComponent from "./ImageComponent"
import imageData from "../Data/imageData"

const Gallery = () => {
    const [images, setImages] = useState<Image[]>(imageData)
    const [description, setDescription] = useState("")
    const [selectedImageId, setselectedImageId] = useState<number | null>(null)

    const handleDescription = (image: Image) => {
        if (selectedImageId === image.id) {
            setDescription("")
            setselectedImageId(null)
            
        }
        else {
            setDescription(image.description)
            setselectedImageId(image.id)
            
        }
    }

    return (
        <div>
            <h2>Our Memories - with many more to come...</h2>
            <h4>Click any picture for some words of love...</h4>
            <div className="gallery">
                    {images.map((image) => (
                        <div className="image-container">
                            <ImageComponent 
                                key={image.id}
                                image={image}
                                handleDescription={handleDescription}
                            />
                            {selectedImageId === image.id && description && (
                                <p className="description">{description}</p>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Gallery