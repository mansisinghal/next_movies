import { store } from "react-notifications-component";

const Alerts = (title, message, type, container, duration) => {
  store.addNotification({
    title: title,
    message: message,
    type: type, // 'default', 'success', 'info', 'warning'
    container: container, // where to position the notifications
    animationIn: ["animate__animated", "animate__fadeIn"], // animate.css classes that's applied
    animationOut: ["animate__animated", "animate__fadeOut"], // animate.css classes that's applied
    dismiss: {
      duration: duration,
    },
  });
};

export default Alerts;