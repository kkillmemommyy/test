export const getSkip = (currentPage: number, limit: number) =>
  (currentPage - 1) * limit;
