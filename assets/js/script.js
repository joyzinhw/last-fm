async function fetchAlbums() {
	const username = document.getElementById('username').value;
	const apiKey = '099241cac19a52cb7767fada133dda6c'; 
	
	try {
	  const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getTopAlbums&user=${username}&api_key=${apiKey}&format=json&period=overall&limit=10`);
	  const data = await response.json();
	  
	  const albums = data.topalbums.album;
	  const albumsContainer = document.getElementById('albums');
	  albumsContainer.innerHTML = '';
	  
	  albums.forEach(album => {
		const albumDiv = document.createElement('div');
		albumDiv.classList.add('album');
		
		const albumImage = document.createElement('img');
		albumImage.src = album.image[2]['#text']; 
		albumImage.alt = album.name;
		
		albumDiv.appendChild(albumImage);
		albumsContainer.appendChild(albumDiv);
	  });
	} catch (error) {
	  console.error('Erro ao buscar álbuns:', error);
	}
  }