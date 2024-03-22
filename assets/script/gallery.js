// PULL IMAGES FROM 'imges.json' AND DISPLAY THEM
console.log('images')
document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');
  
    // Fetch JSON data
    fetch('images.json')
      .then((response) => response.json())
      .then((data) => {
        // Iterate through each image in the JSON
        data.images.forEach((image) => {
          // Create elements for image and caption
          const item = document.createElement('div');
          item.classList.add('gallery-item');
  
          const img = document.createElement('img');
          img.src = image.url;
          img.alt = image.caption;
  
          const caption = document.createElement('p');
          caption.textContent = image.caption;
  
          // Append elements to the gallery
          item.appendChild(img);
          item.appendChild(caption);
          gallery.appendChild(item);
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  });
  