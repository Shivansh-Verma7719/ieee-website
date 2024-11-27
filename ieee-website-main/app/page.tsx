import { get6RandomPhotos } from "./helper";
import PageWrapper from "./pageWrapper";
import getEvents from "./events";

export default async function Home() {
  const photos = await get6RandomPhotos();
  const events = await getEvents();
  return <PageWrapper photos={photos} events={events} />;
}
