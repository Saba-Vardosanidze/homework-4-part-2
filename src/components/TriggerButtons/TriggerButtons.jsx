import {useContext} from "react";
import {NotificationContext} from "../../context/NotificationContext";

const TriggerButtons = () => {
  const {showNotification} = useContext(NotificationContext);

  return (
    <div className="flex justify-between m-auto mt-[154px] max-w-[200px]">
      <button
        onClick={() => showNotification("Success message", "success")}
        className="bg-green-500 hover:bg-green-600 active:bg-green-700 shadow-md active:shadow-inner rounded-[4px] w-[100%] max-w-[88px] min-h-[40px] font-bold text-white transition-all active:translate-y-1 duration-100 cursor-pointer"
      >
        Success
      </button>
      <button
        onClick={() => showNotification("Error message", "error")}
        className="bg-red-500 hover:bg-red-600 active:bg-red-700 shadow-md active:shadow-inner rounded-[4px] w-[100%] max-w-[88px] min-h-[40px] font-bold text-white transition-all active:translate-y-1 duration-100 cursor-pointer"
      >
        Error
      </button>
    </div>
  );
};

export default TriggerButtons;
