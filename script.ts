// Define the shape of a single update item
interface Update {
  date: string;
  description: string;
}

// Define the shape of the JSON data
interface UpdatesData {
  updates: Update[];
}

// Fetch the updates from the local JSON file
fetch('./data/updates.json')
  .then((response: Response): Promise<UpdatesData> => response.json())
  .then((updatesData: UpdatesData) => {
    const updatesContainer = document.getElementById('updates-list');

    if (!updatesContainer) {
      console.error('No element found with ID "updates-list".');
      return;
    }

    // Loop through each update and add it to the page
    updatesData.updates.forEach((update: Update) => {
      const updateElement = document.createElement('div');
      updateElement.classList.add('update-item');

      // Set the content of the update
      updateElement.innerHTML = `
        <p><strong>${update.date}:</strong> ${update.description}</p>
      `;

      // Add the update to the updates container
      updatesContainer.appendChild(updateElement);
    });
  })
  .catch((error: unknown) => {
    console.error('Failed to load updates:', error);
  });
