function init() {
    renderGallery();
    el();
  }
  
  function renderGallery(customPhotos = photos) {
    const x = document.getElementById("gallery");
    x.innerHTML = "";
  
    customPhotos.forEach((photo) => {
      x.innerHTML += createPhotoCard(photo);
    });
  }
  
  photos = [
    { id: 1, title: "Sonnenuntergang", likes: 42 },
    { id: 2, title: "Berge", likes: 38 },
    { id: 3, title: "Strand", likes: 55 },
    { id: 4, title: "Stadt", likes: 29 },
  ];
  
  function createPhotoCard(photo) {
    const x = document.getElementById("gallery");
    x.innerHTML += `
      <div class="photo-placeholder">{photo.emoji}</div><div class="photo-info"><div class="photo-title">${photo.title}</div>
                  <div class="photo-likes">❤️ ${photo.likes} Likes</div>
      <button class="like-btn" onclick="likePhoto(${photo.id})">Like</button></div>
              `;
  }
  
  function likePhoto() {
    const photo = photos.find((p) => p.id === id);
  
    if (photo) {
      photo.likes++;
      renderGallery();
    }
  }
  function el() {
    document
      .getElementById("addPhotoBtn")
      .addEventListener("onclick", addNewPhoto);
  
    document
      .getElementById("resetBtn")
      .addEventListener("click", () => renderGallery());
  }
  
  function addNewPhoto() {
    let titleInput = document.getElementById("photoTitle");
    const emojiInput = document.getElementById("photoEmoji");
  
    const title = titleInput.value;
    const emoji = emojiInput.value;
  
    if ((title = "" || emoji == "")) alert("Bitte fülle beide Felder aus!");
  
    newPhoto = {
      id: 4,
      title: title,
      emoji: emoji,
      likes: 0,
    };
  
    photos.push(newPhoto);
  
    titleInput.value = "";
    emojiInput.value = "";
  }
  
  renderGallery();
  
  function showPopular() {
    const popular = photos.filter((photo = photo.likes > 40));
    renderGallery(popular);
  }
  