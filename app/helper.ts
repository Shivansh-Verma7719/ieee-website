import { getPhotos } from "./about/helpers";

export async function get6RandomPhotos() {
    const photos = await getPhotos();
    const randomPhotos = photos.sort(() => Math.random() - 0.5).slice(0, 6);
    return randomPhotos;
}