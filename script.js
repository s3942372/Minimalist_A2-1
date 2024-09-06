// function moveImageRandomly() {
//     const image = document.getElementById('silkworm');
//     const container = document.querySelector('.container');
    
//     const containerWidth = container.clientWidth;
//     const containerHeight = container.clientHeight;

//     const imageWidth = image.clientWidth;
//     const imageHeight = image.clientHeight;

//     const randomX = Math.random() * (containerWidth - imageWidth);
//     const randomY = Math.random() * (containerHeight - imageHeight);

//     image.style.left = `${randomX}px`;
//     image.style.top = `${randomY}px`;
// }

// setInterval(moveImageRandomly, 10000);

document.addEventListener('DOMContentLoaded', () => {
    const movingImage = document.getElementById('silkworm');
    const clickableImages = document.querySelectorAll('.click');
    const container = document.querySelector('.container');
    let clickedImagesCount = 0;
    const totalImages = clickableImages.length;

    function getRandomPosition() {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        
        const imageWidth = 300;
        const imageHeight = 300;
        
        const randomX = Math.random() * (containerWidth - imageWidth);
        const randomY = Math.random() * (containerHeight - imageHeight);
        
        return { x: randomX, y: randomY };
    }
    
    clickableImages.forEach(image => {
        const { x, y } = getRandomPosition();
        image.style.left = `${x}px`;
        image.style.top = `${y}px`;
    });

    // function createNewImages() {
    //     const newImage1 = document.createElement('img');
    //     const newImage2 = document.createElement('img');

    //     newImage1.src = 'image/spoon.png';
    //     newImage1.alt = 'New Clickable Image';
    //     newImage1.classList.add('click');
    //     newImage1.style.position = 'absolute';
    //     newImage1.style.cursor = 'pointer';

    //     newImage2.src = 'image/pot.png';
    //     newImage2.alt = 'New Image';
    //     newImage2.style.position = 'absolute';

    //     const containerWidth = container.clientWidth;
    //     const containerHeight = container.clientHeight;
        
    //     const imageWidth = 300;
    //     const imageHeight = 300;
        
    //     const centerX = (containerWidth - imageWidth) / 2;
    //     const centerY = (containerHeight - imageHeight) / 2;
        
    //     newImage1.style.left = `${centerX}px`;
    //     newImage1.style.top = `${centerY}px`;
        
    //     newImage2.style.left = `${centerX + imageWidth + 20}px`;
    //     newImage2.style.top = `${centerY}px`;

    //     container.appendChild(newImage1);
    //     container.appendChild(newImage2);
        
    //     newImage1.addEventListener('click', () => {
    //         alert('New clickable image clicked!');
    //     });
    // }

    // function changeBackgroundAndAddNewImages() {
    //     setTimeout(() => {
    //         document.body.style.backgroundImage = '/boil.jpg';
            
    //         if (movingImage.src = newImageSrc) {
    //             createNewImages(); // Add new images
    //         }
    //     }, 3000);
    // }

    // function checkAllImagesHidden() {
    //     const allHidden = Array.from(clickableImages).every(image => image.style.display === 'none');
        
    //     if (allHidden) {
    //         movingImage.style.cursor = 'pointer';
    //         movingImage.addEventListener('click', () => {
    //             alert('The moving image has been clicked!');
    //         });

    //         changeBackgroundAndAddNewImages();
    //     }
    // }
    
    clickableImages.forEach(image => {
        image.addEventListener('click', () => {
            const rect = image.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            
            const imageX = rect.left - containerRect.left;
            const imageY = rect.top - containerRect.top;
            
            movingImage.style.left = `${imageX}px`;
            movingImage.style.top = `${imageY}px`;

            setTimeout(() => {
                image.style.display = 'none';
                checkAllImagesHidden();
            }, 3000);

            const newImageSrc = image.getAttribute('transform');
            if (newImageSrc, clickedImagesCount === totalImages - 1) {
                setTimeout(() => {
                    movingImage.src = newImageSrc;
                    movingImage.style.transition = 'none';
                });
            }
            clickedImagesCount++;
        });
    });
});
