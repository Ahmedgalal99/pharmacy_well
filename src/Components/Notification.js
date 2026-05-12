import { useContext } from "react";
import { NotificationManager } from "react-notifications";
import { ToastContainer, toast } from "react-toastify";

const useNotifications = () => {
  const showNotification = (message, type) => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "warning":
        toast.warning(message);
        break;
      case "error":
        toast.error(message);
        break;
      default:
        toast.info(message);
        break;
    }
  };

  return { showNotification };
};

export default useNotifications;
