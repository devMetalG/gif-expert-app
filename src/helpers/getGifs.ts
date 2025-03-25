interface ImgData {
  id: string;
  title: string;
  images: Images
}

interface Images {
  downsized_medium: DownsizedMedium;
}

interface DownsizedMedium {
  url: string;
}

export const getGifs = async(category:string) => {
  const url: string = `https://api.giphy.com/v1/gifs/search?api_key=YawruTwtRMN5BBs91JAaJplGlxbU2FqK&q=${ category }&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img:ImgData) => ({
    id: img.id,
    title: img.title,
    images: img.images
  }));
  return gifs;
}