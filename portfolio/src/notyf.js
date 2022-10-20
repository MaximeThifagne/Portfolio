import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import "material-icons/iconfont/material-icons.css";

const notification = new Notyf({
  duration: 4000,
  position: {
    x: "right",
    y: "bottom",
  },
  types: [
    {
      type: "success",
      background: "linear-gradient(to right, #2E7D32, #4CAF50 )",
      dismissible: true,
      icon: {
        className: "material-icons",
        tagName: "i",
        text: "done",
      },
    },
    {
      type: "information",
      background: "linear-gradient(to right, darkblue, dodgerblue)",
      dismissible: true,
      icon: {
        className: "material-icons",
        tagName: "i",
        text: "info",
      },
    },
    {
      type: "warning",
      background: "linear-gradient(to right, orangered, orange)",
      dismissible: true,
      icon: {
        className: "material-icons",
        tagName: "i",
        text: "warning",
      },
    },
    {
      type: "error",
      background: "linear-gradient(to right, red, orangered)",
      dismissible: true,
      icon: {
        className: "material-icons",
        tagName: "i",
        text: "error",
      },
    },
  ],
});

export default notification;
