import React from "react";

interface RewardProps {
  title: string;
  points: string;
}

const RewardCard: React.FC<RewardProps> = ({ title, points }) => (
  <div className="flex text-gray-400 p-2">
    <p className="w-4/5 line-clamp-1 mr-2">{title}</p>
    <p className="">+{points}</p>
  </div>
);

export const RewardList: React.FC = () => {
  const rewardList: Array<RewardProps> = [
    {
      title: "Invite a fren",
      points: "100",
    },
    {
      title: "Invite a fren with premium",
      points: "300",
    },
    {
      title:
        "Invite a fren with premium Invite a fren with premium Invite a fren with premium",
      points: "300",
    },
  ];

  return (
    <div className="container">
      <div className="text-white text-xl font-bold pt-4 pl-4">
        <p>Invite Rewards</p>
      </div>
      <div className="flex flex-col font-bold rounded-3xl m-2 p-4 bg-slate-700">
        {rewardList.map((reawrd, index) => (
          <RewardCard key={index} {...reawrd} />
        ))}
      </div>
    </div>
  );
};
