import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import { Fragment } from "react";
import { useRouter } from "next/router";
import EventSearch from "../../components/events/events-search";
function AllEvents() {
  const router = useRouter();
  const AllEvents = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath); 
  }
  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={AllEvents} />
    </Fragment>
  );
}

export default AllEvents;
