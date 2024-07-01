const cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
    card.addEventListener('click', function() {
        var content = card.querySelector(".expansao");
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }     
    });

});

const zom_img = document.querySelectorAll(".imagem");
zom_img.addEventListener('click',()=>{
    if (zom_img ==="300px") {
         zom_img.style.width = "200px";
    }else{
        zom_img.style.width = "300px"
    }
})


