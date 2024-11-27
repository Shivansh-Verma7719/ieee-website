import { getPhotosServer } from "./about/actions";

export async function get6RandomPhotos() {
  const photos = await getPhotosServer();
  const randomPhotos = photos.sort(() => Math.random() - 0.5).slice(0, 6);
  return randomPhotos;
}
