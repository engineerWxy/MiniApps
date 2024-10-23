import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

// 定义导航项的数据类型
interface NavigationItem {
  label: string;
  icon: JSX.Element;
  value: string;
  path: string;
}

// 导航项列表
const navigationItems: NavigationItem[] = [
  {
    label: "Play",
    icon: <SportsEsportsIcon />,
    value: "play",
    path: "/",
  },
  {
    label: "Earn",
    icon: <FormatListNumberedRtlIcon />,
    value: "earn",
    path: "/earn",
  },
  {
    label: "Invite",
    icon: <GroupAddIcon />,
    value: "invite",
    path: "/invite",
  },
];

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 初始化 value 为默认路径对应的值
  const [value, setValue] = React.useState<string>("home");

  React.useEffect(() => {
    // 查找当前路径对应的 value
    const currentValue =
      navigationItems.find((item) => item.path === location.pathname)?.value ||
      "home";

    setValue(currentValue);
  }, [location]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(`/${newValue}`);
  };

  return (
    <BottomNavigation
      className="fixed bottom-0 z-50 w-full rounded-1xl"
      sx={{ backgroundColor: "rgb(8 145 178)", height: "56px" }}
      showLabels
      value={value}
      onChange={handleChange}
    >
      {navigationItems.map((item) => (
        <BottomNavigationAction
          key={item.value}
          label={item.label}
          icon={item.icon}
          value={item.value}
        />
      ))}
    </BottomNavigation>
  );
};
