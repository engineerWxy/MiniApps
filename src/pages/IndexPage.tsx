import * as React from "react";
import { GameList } from "../components";

export const IndexPage: React.FC = () => {
  const user_name: string = "Nick Wu";
  const user_points: string = "99,999,999";

  return (
    <div className="flex flex-col z-10  bg-slate-800 min-h-screen pb-14">
      <header className="w-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600">
        <div className="text-center p-1">
          <p className="font-serif text-base text-yellow-600">@{user_name}</p>
          <p className="font-serif text-base text-yellow-600">
            Points : {user_points}
          </p>
        </div>
      </header>
      <div>
        <GameList />
      </div>
    </div>
  );
};
