/* eslint-disable @next/next/no-img-element */

import classes from "./event-item.module.css";

import Button from "../ui/button";

import DateIcon from "../../components/icons/date-icon";
import AddressIcon from "../../components/icons/address-icon";
import ArrowRightIcon from "../../components/icons/arrow-right-icon";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} height="300px" width="300px" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          {/* <Link href={exploreLink}></Link> */}
          <Button link={exploreLink}>
            <sapn>Explore Event</sapn>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
