import { createContext, useState } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(null);

  const showNotification = (notification, type) => {
    setMessage(notification);
    setType(type);

    setTimeout(() => {
      setMessage(null);
      setType(null);
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={{ message, type, showNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};
