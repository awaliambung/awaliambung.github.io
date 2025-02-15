fetch('./data/updates.json')
  .then(response => response.json())
  .then(data => {
    const updatesList = document.getElementById('updates-list');
    
    data.updates.forEach(update => {
      const updateItem = document.createElement('div');
      updateItem.classList.add('update-item');
      
      updateItem.innerHTML = `<p><strong>${update.date}:</strong> ${update.description}</p>`;
      
      updatesList.appendChild(updateItem);
    });
  })
  .catch(error => {
    console.error('Error loading updates:', error);
  });