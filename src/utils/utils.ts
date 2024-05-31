export const formatDate = (date: string): string => {
  const formattedDate = new Date(date).toLocaleDateString('es', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
  return formattedDate === 'Invalid Date' ? '' : formattedDate;
};
