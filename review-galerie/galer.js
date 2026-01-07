const photos = [
  { id: 1, title: "Sonnenuntergang", likes: 42, emoji: "☀️" },
  { id: 2, title: "Berge", likes: 38, emoji: "⛰️" },
  { id: 3, title: "Strand", likes: 55, emoji: "🐚" },
  { id: 4, title: "Stadt", likes: 29, emoji: "🌆" },
];

function init() {
  renderGallery();
}

function renderGallery(customPhotos = photos) {
  const galleryRef = document.getElementById("gallery");
  galleryRef.innerHTML = "";
  customPhotos.forEach((photo) => {
    galleryRef.innerHTML += templetPhotoCard(photo);
  });
  console.log(photos);
}

function templetPhotoCard(photo) {
  return `
          <div class="photo-placeholder">${photo.emoji}</div>
          <div class="photo-info">
            <div class="photo-title">${photo.title}</div>
            <div class="photo-likes">❤️ ${photo.likes} Likes</div>
            <button class="like-btn" onclick="likePhoto(${photo.id})">Like</button>
          </div>`;
}

function likePhoto(likeId) {
  const photo = photos.find((index) => index.id == likeId);
  if (photo) {
    photo.likes++;
    renderGallery();
  }
}

function addNewPhoto() {
  let titleInput = document.getElementById("photoTitle");
  let emojiInput = document.getElementById("photoEmoji");

  let title = titleInput.value;
  let emoji = emojiInput.value;

  if (title == "" || emoji == "") {
    alert("Bitte fülle beide Felder aus!");
    return;
  }


  const newPhoto = {
    id: (photos.length + 1),
    title: title,
    likes: 20,
    emoji: emoji,
  };
  console.log(photos + "new Photo: " + newPhoto)
  photos.push(newPhoto);

  titleInput.value = "";
  emojiInput.value = "";
  renderGallery();
}

function showPopular() {
  const popular = photos.filter((photo = photo.likes > 40));
  renderGallery(popular);
}
