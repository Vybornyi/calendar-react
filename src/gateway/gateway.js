const baseUrl = 'https://62e0303a98dd9c9df60f6e25.mockapi.io/events/';

export const fetchEventsList = () =>
  fetch(baseUrl).then(response => {
    if (!response.ok) {
      alert('Internal Server Error. Can\'t display events');
    }
    return response.json();
  });

export const createEvent = event =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  }).then(response => {
    if (!response.ok) {
      alert('Internal Server Error. Can\'t display events');
    }
  });

export const deleteTask = taskId =>
  fetch(`${baseUrl}${taskId}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      alert('Internal Server Error. Can\'t display events');
    }
  });
