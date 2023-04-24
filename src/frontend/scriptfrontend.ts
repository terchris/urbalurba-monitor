// src/frontend/scriptfrontend.ts
import { charInString } from './frontendfunctions';

async function listQueuesFromServer() {


  const response = await fetch('/listQueues');
  const queues = await response.json();

  const tableBody = document.getElementById('queues-table-body');
  if (tableBody) {
    for (const queue of queues) {

      const row = document.createElement('tr');
      const cell = document.createElement('td');
      cell.textContent = queue;
      row.appendChild(cell);
      tableBody.appendChild(row);

    }
  }
}

listQueuesFromServer();
