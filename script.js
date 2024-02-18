fetch('https://run.mocky.io/v3/your-unique-id')
  .then(response => response.json())
  .then(data => {
    document.getElementById('number').innerText = data.number;
  })
  .catch(error => console.error('Error:', error));
