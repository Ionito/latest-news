export const formatDate = (date: string): string => {
  const formattedDate = new Date(date).toLocaleDateString('es', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
  return formattedDate === 'Invalid Date' ? '' : formattedDate;
};

export const getPageSize = (): number => {
  const windowWidth = window.innerWidth ?? 0;

  switch (true) {
    case windowWidth >= 800:
      return 12;
    default:
      return 10;
  }
};
