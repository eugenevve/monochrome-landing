import { CodeIcon, HouseIcon, UserIcon } from "@app/ui/Icons";

export const navigationItems = [
  {
    path: "/",
    label: "Home",
    icon: <HouseIcon />,
  },
  {
    path: "/projects",
    label: "Projects",
    icon: <CodeIcon />,
  },
  {
    path: "/about",
    label: "About",
    icon: <UserIcon />,
  },
] as const;
