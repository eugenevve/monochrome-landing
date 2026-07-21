import { useLocation } from "react-router";

export const useNavigationKind = <T>(kinds: { PRIMARY: T; SECONDARY: T }) => {
  const { pathname } = useLocation();

  return (path: string): T => (pathname === path ? kinds.SECONDARY : kinds.PRIMARY);
};
