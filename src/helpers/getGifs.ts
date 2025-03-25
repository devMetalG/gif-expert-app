interface ImgData {
  id: string;
  title: string;
  url: string;
}

export const getGifs = async(category:string) => {
  const url: string = `https://api.giphy.com/v1/gifs/search?api_key=YawruTwtRMN5BBs91JAaJplGlxbU2FqK&q=${ category }&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img:ImgData) => ({
    id: img.id,
    title: img.title,
    url: img.url
  }));

  console.log(gifs);
  return gifs
}