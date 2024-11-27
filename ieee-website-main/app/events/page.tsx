import EventsWrapper from "./eventsWrapper";
import getEvents from "../events";

export default async function EventsPage() {
  const events = await getEvents();
  return <EventsWrapper events={events} />;
}
