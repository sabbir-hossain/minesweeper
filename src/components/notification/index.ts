import {
  Store,
  NOTIFICATION_CONTAINER,
  NOTIFICATION_INSERTION,
} from 'react-notifications-component';

const notificationConfig = {
  insert: "top" as NOTIFICATION_INSERTION,
  container: 'top-right' as NOTIFICATION_CONTAINER,
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"],
  dismiss: {
    duration: 1000,
    onScreen: true
  }
}

export const success = (title: string, message='') => {
  Store.addNotification({
    message,
    title, 
    type: "success",
    ...notificationConfig
  })
}

export const error = (title: string, message='') => {
  Store.addNotification({
    message,
    title, 
    type: "danger",
    ...notificationConfig
  })
}

export const info = (title: string, message='') => {
  Store.addNotification({
    message,
    title, 
    type: "info",
    ...notificationConfig
  })
}

export const warning = (title: string, message='') => {
  Store.addNotification({
    message,
    title, 
    type: "warning",
    ...notificationConfig
  })
}

