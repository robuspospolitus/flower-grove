import { useState, useEffect } from 'react';
import '../../styles/styles/gallery.scss';

const images = [
    "https://picsum.photos/200/300/?image=523",
    "https://picsum.photos/200/300/?image=524",
    "https://picsum.photos/200/300/?image=525",
    "https://picsum.photos/200/300/?image=526"
  ];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState([0, "https://picsum.photos/200/300/?image=523"]);
    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedImage(() => [selectedImage[0] === 3 ? 0 : selectedImage[0]+1, selectedImage[0] === 3 ? images[0] : images[selectedImage[0]+1]]);
        }, 5000);

        return () => clearInterval(interval);
    }, [selectedImage])
    return(
        <>
            <img className='gallery'  src={selectedImage[1]} />
        </>
    );
}