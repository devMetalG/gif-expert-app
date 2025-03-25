import { getGifs } from "../helpers/getGifs";

interface GifGridProps {
  category: string;
}



export const GifGrid:React.FC<GifGridProps> = ({ category }) => {

  

  getGifs(category)

  return (
    <>
      <h3> {category} </h3>
    </>
  )
}

