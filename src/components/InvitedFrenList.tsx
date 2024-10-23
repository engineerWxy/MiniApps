import React from "react";
import headImage from "../static/images/head.jpg";
import headWatImage from "../static/images/head_wat.jpg";

interface FrenProps {
  handle: string;
  points: string;
  imageSrc: string;
}

const FrenCard: React.FC<FrenProps> = ({ handle, points, imageSrc }) => (
  <div className="flex text-gray-400 p-2">
    <img src={imageSrc} alt="head" className="w-1/12 mr-2 rounded-full" />
    <p className="w-2/3  mr-2 line-clamp-1">{handle}</p>
    <p>+{points}</p>
  </div>
);

export const FrenList: React.FC = () => {
  const frenList: Array<FrenProps> = [
    {
      handle: "Nick Wu 12sak mfj asn flnlsa nfl;s nafd;an l;ns ak.d",
      points: "100",
      imageSrc: headImage,
    },
    {
      handle: "Qin",
      points: "300",
      imageSrc: headImage,
    },
    {
      handle: "Er hu",
      points: "100",
      imageSrc: headImage,
    },
    {
      handle: "Si Cong",
      points: "300",
      imageSrc: headWatImage,
    },
    {
      handle: "Kun",
      points: "100",
      imageSrc: headWatImage,
    },
    {
      handle: "Yun Long",
      points: "300",
      imageSrc: headWatImage,
    },
  ];
  // 排序函数
  function sortByStatus(tasks: FrenProps[]): FrenProps[] {
    return tasks.sort((a, b) => Number(b.points) - Number(a.points));
  }

  // 使用排序函数
  // const sortedFrenList: Array<any> = [];
  const sortedFrenList = sortByStatus(frenList);

  return (
    <div className="container">
      <div className="text-white text-xl font-bold pt-4 pl-4">
        <p>Invite Frens</p>
      </div>
      <div className="flex flex-col font-bold m-2 p-4">
        {sortedFrenList.length ? (
          sortedFrenList.map((fren, index) => (
            <FrenCard key={index} {...fren} />
          ))
        ) : (
          <div className="flex flex-col">
            <p className="text-center text-gray-400">No frens invited yet</p>
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
};
