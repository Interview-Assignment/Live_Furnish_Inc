const addThumbnail = document.getElementById("thumbnail-div");

function thumbnail(image) {
  image.map((v) => {
    addThumbnail.innerHTML = `
    <img src = ${imageUrl} `;
  });
}

console.log(
  thumbnail([
    "https://nystudio107-ems2qegf7x6qiqq.netdna-ssl.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg",
  ])
);
