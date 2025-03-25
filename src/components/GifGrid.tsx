import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';

interface GifGridProps {
  category: string;
}

interface ImgData {
  id: string;
  title: string;
  images: Images;
}

interface Images {
  downsized_medium: DownsizedMedium;
}

interface DownsizedMedium {
  url:string;
}

export const GifGrid:React.FC<GifGridProps> = ({ category }) => {

  const [images, setImages] = useState([]);

  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages)
  }  

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3> {category} </h3>
      <div className='card-grid'>
        {
          images.map( (image:ImgData) => (
            <GifItem 
              key={ image.id }
              title= { image.title }
              images= { image.images }
              //{ ...image }
            />
          ))
        }
      </div>
    </>
  )
}

