import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

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

  const { images, isLoading }  = useFetchGifs(category);

  return (
    <>
      <h3> {category} </h3>
      {
      
      isLoading && (<h2>Loading...</h2>)
      }
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

