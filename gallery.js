/*Name this external file gallery.js*/

function upDate(previewPic){
    // Vérifier que l'événement se déclenche
    console.log('upDate déclenché');
    console.log('alt:', previewPic.alt);
    console.log('src:', previewPic.src);
    // Modifier le texte de la div avec l'id "image"
    var imageDiv = document.getElementById('image');
    imageDiv.innerHTML = previewPic.alt;
    // Modifier l'image d'arrière-plan de la div
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo(){
    // Remettre l'image d'arrière-plan à vide
    var imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    // Remettre le texte original
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
