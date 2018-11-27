

myndir = [];

imgs.forEach(function(img){
	let imgs = new Image();
	imgs.dataset.name=img.name;
	imgs.src = img.src;
	imgs.dataset.tags = img.tags;
	imgs.dataset.type=img.type;
	myndir.push(imgs)
});
 
let myndasafn = document.getElementById('gallery');

myndir.forEach(img => {
myndasafn.appendChild(img);	//Sýnir allar myndinar.
});
