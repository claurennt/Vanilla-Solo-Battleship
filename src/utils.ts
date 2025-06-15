export const createTableHeadersText = (type: 'column' | 'row') => {
  const colHeaders = 'ABCDEFGHIJ';

  const generateHeaderValue = (i: number): string => {
    if (type === 'row') {
      return (i + 1).toString();
    }
    return colHeaders.charAt(i);
  };

  const tableHeadersText = Array.from({ length: 10 }, (_, i) =>
    generateHeaderValue(i)
  );

  return tableHeadersText;
};
