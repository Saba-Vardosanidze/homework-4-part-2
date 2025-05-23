import {useContext} from "react";
import {NotificationContext} from "../../context/NotificationContext";
import {motion} from "framer-motion";

const Notification = () => {
  const {message, type, setType, setMessage} = useContext(NotificationContext);
  if (!message) return null;

  const bgColor =
    type === "success"
      ? "bg-[#E5FCF1]"
      : type === "error"
      ? " bg-[#FDECEC]"
      : "bg-gray-500";

  const border =
    type === "success"
      ? "border-[#01E17B]"
      : type === "error"
      ? "border-[#F04349]"
      : "bg-gray-500";

  const img =
    type === "success"
      ? "./images/svg/success.svg"
      : type === "error"
      ? "./images/svg/error.svg"
      : "bg-gray-500";

  const xIcon =
    type === "success"
      ? "./images/svg/GreenX.svg"
      : type === "error"
      ? "./images/svg/redX.svg"
      : "bg-gray-500";

  function closeToast() {
    setMessage(null);
    setType(null);
  }
  return (
    <motion.div
      className={`${bgColor} text-[#28292A] max-w-[350px] w-[100%] min-h-[56px] rounded fixed top-10 right-10 shadow-md border ${border} flex rounded-[16px] items-center font-semibold justify-between`}
      animate={{
        x: [200, 10],
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
    >
      <div className="flex gap-[12px] ml-[16px] max-[209px]">
        <img src={img} alt="notificationIcon" />
        {message}
      </div>
      <button onClick={closeToast} className="mr-[16px] cursor-pointer">
        <img src={xIcon} alt="closeButton" />
      </button>
    </motion.div>
  );
};

export default Notification;
