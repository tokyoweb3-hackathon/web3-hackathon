import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from "@mui/icons-material/Search";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import WindowIcon from "@mui/icons-material/Window";
import { useRouter } from "next/router";

export default function BottomNavigationBar() {
  const router = useRouter();
  const [value, setValue] = React.useState(() => {
    switch (router.pathname) {
      case "/myPage":
        return 0;
      case "/search":
        return 1;
      case "/evaluation":
        return 2;
      case "/notification":
        return 3;
      default:
        return 0;
    }
  });

  console.log();

  const onLink = (href: string) => {
    router.push(href);
  };

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        label="マイページ"
        icon={<WindowIcon />}
        onClick={() => onLink("/myPage")}
      />
      <BottomNavigationAction
        label="さがす"
        icon={<SearchIcon />}
        onClick={() => onLink("/search")}
      />
      <BottomNavigationAction
        label="評価"
        icon={<PieChartOutlineIcon />}
        onClick={() => onLink("/evaluation")}
      />
      <BottomNavigationAction
        label="通知"
        icon={<NotificationsIcon />}
        onClick={() => onLink("/notification")}
      />
    </BottomNavigation>
  );
}
