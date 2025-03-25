interface ImgDataProps {
  title: string;
  images: Images;
}

interface Images {
  downsized_medium: DownsizedMedium;
}

interface DownsizedMedium {
  url:string;
}

export const GifItem:React.FC<ImgDataProps> = ( {title, images} ) => {
  return (
    <div className="card">
      <img src={ images.downsized_medium.url } alt={ title } />
      <p> {title} </p>
    </div>
  )
}