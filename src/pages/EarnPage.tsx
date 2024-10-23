import * as React from "react";
import { useNavigate } from "react-router-dom";
import earnImage from "../static/images/earn.png";
import { TaskList } from "../components";

export const EarnPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate("/invite");
  };
  return (
    <div className="flex flex-col z-10  bg-slate-800 min-h-screen pb-14">
      <header className="w-full">
        <div className="items-center justify-center">
          <img src={earnImage} className="w-full h-30" />
        </div>
        <div
          className="items-center bg-sky-500 rounded-2xl p-5 mx-2 my-1 cursor-pointer"
          onClick={handleNavigateToHome}
        >
          <p className="text-center text-base text-white font-bold">
            Invite frens and earn points together!
          </p>
        </div>
      </header>
      <main>
        <TaskList />
      </main>
    </div>
  );
};
