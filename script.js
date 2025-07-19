function upDate(previewPic) {
  console.log("🦜 Survol de :", previewPic.alt);
  console.log("🖼️ Source :", previewPic.src);

  const imageDiv = document.getElementById("image");
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function unDo() {
  const imageDiv = document.getElementById("image");
  imageDiv.innerHTML = "Survolez un membre de l’équipage pour l’afficher ici";
  imageDiv.style.backgroundImage = "url('')";
}
