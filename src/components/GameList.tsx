import React from "react";
import playImage from "../static/images/play.jpg";

interface GameCardProps {
  title: string;
  description: string;
  imageSrc: string;
  jumpUrl: string;
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  description,
  imageSrc,
  jumpUrl,
}) => (
  <div className="flex flex-col items-center justify-center rounded-3xl mx-6 my-4 bg-slate-700 relative">
    {/* Editor's Choice badge */}
    <div className="absolute top-2 left-2 bg-purple-700 text-white text-sm font-semibold rounded-md">
      Editor's Choice
    </div>
    {/* Game image */}
    <img src={imageSrc} alt={title} className="w-full h-48 rounded-t-3xl" />

    {/* Game details */}
    <div className="px-2 pt-2">
      <p className="text-lg font-bold mt-1 text-white line-clamp-1">{title}</p>
      <p className="text-xs text-gray-400 line-clamp-2">{description}</p>
    </div>
    <button className="bg-cyan-700 rounded-3xl text-white my-2 w-11/12 h-9">
      <a href={jumpUrl} className="block flex items-center justify-center">
        Play
      </a>
    </button>
  </div>
);

export const GameList: React.FC = () => {
  const gameList: Array<GameCardProps> = [
    {
      imageSrc: playImage,
      title: "LOA Hero",
      jumpUrl: "https://t.me/loa_hero_bot/LOAHero",
      description:
        "A mini game developed by Legend of Arcadia, a multi-chain, action-packed RPG-based strategy card game set in the faraway land of Arcadia 🐯",
    },
    {
      imageSrc: playImage,
      title: "Deek Olympics Look Look Look Look Look",
      jumpUrl: "https://t.me/loa_hero_bot/LOAHero",
      description:
        "Deek is ready for the Olympic Games. His ultimate goal? Be the first Deek to land on Moon!",
    },
    {
      imageSrc: playImage,
      title: "Deek Olympics Look Look Look Look Look",
      jumpUrl: "https://t.me/loa_hero_bot/LOAHero",
      description:
        "Deek is ready for the Olympic Games. His ultimate goal? Be the first Deek to land on Moon!",
    },
  ];
  return (
    <div>
      <div className="text-white text-xl font-bold pt-4 pl-4 italic">
        <p>Recomment</p>
      </div>
      {gameList.map((game, index) => (
        <GameCard key={index} {...game} />
      ))}
    </div>
  );
};
