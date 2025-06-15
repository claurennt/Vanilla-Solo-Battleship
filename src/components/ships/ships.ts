import { Ships } from './shipsData';

export const displayComputerShips = (ships: Ships): HTMLElement | null => {
  const container = document.getElementById('ships-container');
  if (!container) return null;

  ships.forEach(({ name, size, count }) => {
    const content = document.createElement('p');
    content.innerText = `${count} ${name} (${size} squares)`;
    container.appendChild(content);

    // display ship type
    for (let i = 0; i < count; i++) {
      const shipDiv = document.createElement('div');
      shipDiv.className = 'ship';
      container.appendChild(shipDiv);

      // display size of ship
      for (let i = 0; i < size; i++) {
        const shipSquare = document.createElement('div');
        shipSquare.className = 'ship-square';
        shipDiv.appendChild(shipSquare);
      }
    }
  });

  return container;
};
