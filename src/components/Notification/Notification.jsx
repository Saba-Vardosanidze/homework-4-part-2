import { useContext } from "react";
import { NotificationContext } from "../../context/NotificationContext";

const Notification = () => {
  const { message, type } = useContext(NotificationContext);
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

  return (
    <div
      className={`${bgColor} text-[#28292A] max-w-[350px] w-[100%] min-h-[56px] rounded fixed top-4 right-4 shadow-md border ${border} flex rounded-[16px] items-center font-semibold`}
    >
      <div className="flex gap-[12px] ml-[16px] max-[209px]">
        <img src={img} alt="notificationIcon" />
        {message}
      </div>
    </div>
  );
};

export default Notification;
