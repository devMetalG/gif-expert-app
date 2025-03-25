interface GifGridProps{
  category: string
}

export const GifGrid:React.FC<GifGridProps> = ({ category }) => {
  return (
    <>
      <h3> {category} </h3>
      <p> Hello world!!! </p>
    </>
  )
}

