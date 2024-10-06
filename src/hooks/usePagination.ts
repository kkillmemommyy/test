import { useMemo } from "react";

export const usePagination = (total: number, limit: number) => {
  const pages = useMemo(() => {
    const result = [];
    const pageCount = Math.ceil(total / limit);

    for (let i = 1; i < pageCount; i++) {
      result.push(i);
    }

    return result;
  }, [total, limit]);

  return pages;
};
