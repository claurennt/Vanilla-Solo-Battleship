import { createTableHeadersText } from './utils';

const createBattleground = () => {
  const table = document.createElement('table');
  const tHead = document.createElement('thead');
  const tRow = document.createElement('tr');
  const tBody = document.createElement('tbody');

  table.appendChild(tHead);
  table.appendChild(tBody);
  tHead.appendChild(tRow);

  const columnHeaders = createTableHeadersText('column'); // 1–10
  const rowHeaders = createTableHeadersText('row'); // A–J

  // Empty top-left corner cell
  const emptyCorner = document.createElement('td');
  emptyCorner.innerText = '';
  tRow.appendChild(emptyCorner);

  // Top column headers
  for (let col = 0; col < columnHeaders.length; col++) {
    const colHeader = document.createElement('th');
    colHeader.scope = 'col';
    colHeader.innerText = columnHeaders[col];
    tRow.appendChild(colHeader);
  }

  // Table body rows
  for (let row = 0; row < rowHeaders.length; row++) {
    const tRow = document.createElement('tr');
    const rowHeader = document.createElement('th');
    rowHeader.scope = 'row';
    rowHeader.innerText = rowHeaders[row];
    tRow.appendChild(rowHeader);

    // 10 cells in the row
    for (let col = 0; col < columnHeaders.length; col++) {
      const td = document.createElement('td');
      td.innerText = '';

      // for screen readers, so users know where they are at, will be visually hidden via css
      td.innerText = `${columnHeaders[col]} ${rowHeaders[col]}`;
      tRow.appendChild(td);
    }

    tBody.appendChild(tRow);
  }

  return table;
};

document.addEventListener('DOMContentLoaded', () => {
  const [container] = document.getElementsByTagName('main');

  const table = createBattleground();
  container.appendChild(table);
});
