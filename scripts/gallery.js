document.querySelectorAll('.img-container img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.img-popup').style.display = 'block';
        document.querySelector('.img-popup img').src = image.getAttribute('src');
    }
});

document.querySelector('.img-popup span').onclick = () =>{
    document.querySelector('.img-popup').style.display = 'none';
}