import React from "react";
import pointsImage from "../static/images/points.png";

interface TaskCardProps {
  title: string;
  description: string;
  status: boolean;
  pointsImg: string;
  jumpUrl: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  status,
  pointsImg,
  jumpUrl,
}) => (
  <div className="flex items-center rounded-3xl mx-6 my-4 bg-slate-700">
    {/* points image */}
    <img src={pointsImg} alt={title} className="w-12 h-12 rounded-t-1xl m-2" />

    {/* task */}
    <div className="flex flex-col w-3/5">
      <p className="text-lg font-bold mt-1 text-white line-clamp-2">{title}</p>
      <p className="text-xs text-gray-400 mb-1 line-clamp-2">{description}</p>
    </div>

    {status ? (
      <button className="w-12 bg-gray-500 rounded-3xl  cursor-not-allowed m-2">
        Done
      </button>
    ) : (
      <button className="w-12 bg-cyan-400 rounded-3xl m-2">
        <a href={jumpUrl} className="block flex items-center justify-center">
          Play
        </a>
      </button>
    )}
  </div>
);

export const TaskList: React.FC = () => {
  const taskList: Array<TaskCardProps> = [
    {
      pointsImg: pointsImage,
      title:
        "The Open Ocean The Open Ocean The Open Ocean The Open Ocean The Open Ocean The Open Ocean",
      jumpUrl: "https://t.me/loa_hero_bot/LOAHero",
      description: "Check in Play",
      status: true,
    },
    {
      pointsImg: pointsImage,
      title: "LOA Hero",
      jumpUrl: "https://t.me/loa_hero_bot/LOAHero",
      description: "Play the game",
      status: false,
    },
    {
      pointsImg: pointsImage,
      title: "LOA Hero",
      jumpUrl: "https://t.me/loa_hero_bot/LOAHero",
      description: "Play the game",
      status: true,
    },
    {
      pointsImg: pointsImage,
      title: "LOA Hero",
      jumpUrl: "https://t.me/loa_hero_bot/LOAHero",
      description:
        "A mini game developed by Legend of Arcadia, a multi-chain, action-packed RPG-based strategy card game set in the faraway land of Arcadia 🐯",
      status: false,
    },
    {
      pointsImg: pointsImage,
      title: "LOA Hero",
      jumpUrl: "https://t.me/loa_hero_bot/LOAHero",
      description: "Play the game",
      status: false,
    },
  ];

  // 排序函数
  function sortByStatus(tasks: TaskCardProps[]): TaskCardProps[] {
    return tasks.sort((a, b) => Number(a.status) - Number(b.status));
  }

  // 使用排序函数
  const sortedTaskList = sortByStatus(taskList);

  return (
    <div className="container">
      <div className="text-white text-xl font-bold pt-4 pl-4">
        <p>Daily Missions</p>
      </div>
      {sortedTaskList.map((game, index) => (
        <TaskCard key={index} {...game} />
      ))}
    </div>
  );
};
