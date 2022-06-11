import {
  Store,
  NOTIFICATION_CONTAINER,
  NOTIFICATION_INSERTION,
} from "react-notifications-component";

const notificationConfig = {
  insert: "top" as NOTIFICATION_INSERTION,
  container: "top-right" as NOTIFICATION_CONTAINER,
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"],
  dismiss: {
    duration: 1000,
    onScreen: true,
  },
};

export const success = (title: string, message = ""): void => {
  Store.addNotification({
    ...notificationConfig,
    message,
    title,
    type: "success",
  });
};

export const error = (title: string, message = ""): void => {
  Store.addNotification({
    ...notificationConfig,
    message,
    title,
    type: "danger",
  });
};

export const info = (title: string, message = ""): void => {
  Store.addNotification({
    ...notificationConfig,
    message,
    title,
    type: "info",
  });
};

export const warning = (title: string, message = ""): void => {
  Store.addNotification({
    ...notificationConfig,
    message,
    title,
    type: "warning",
  });
};
