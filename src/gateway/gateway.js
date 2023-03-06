const baseUrl = 'https://64020738ab6b7399d0b22b58.mockapi.io/events/';

export const fetchEventsList = () =>
  fetch(baseUrl).then(response => {
    if (!response.ok) {
      throw new Error('Internal Server Error. Can\'t download events');
    }
    return response.json();
  });

export const postEvent = event =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Internal Server Error. Can\'t save event');
    }
  });

export const deleteTask = taskId =>
  fetch(`${baseUrl}${taskId}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Internal Server Error. Can\'t delete event');
    }
  });
