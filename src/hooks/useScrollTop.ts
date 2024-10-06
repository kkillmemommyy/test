import { useEffect } from "react";

export const useScrollToTop = (...dependency: unknown[]) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, dependency);
};
