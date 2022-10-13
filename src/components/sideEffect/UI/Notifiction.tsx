import * as React from "react";

import { Fragment } from "react";
interface notificationProps {
  children: React.ReactNode;
}

const Notification = (props: notificationProps) => {
  return <Fragment>{props.children}</Fragment>;
};
export default Notification;
