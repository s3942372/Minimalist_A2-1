// function moveImageRandomly() {
//     const image = document.getElementById('silkworm');
//     const container = document.querySelector('.container');
    
//     const containerWidth = container.clientWidth;
//     const containerHeight = container.clientHeight;

//     const imageWidth = image.clientWidth;
//     const imageHeight = image.clientHeight;

//     // Generate random position
//     const randomX = Math.random() * (containerWidth - imageWidth);
//     const randomY = Math.random() * (containerHeight - imageHeight);

//     // Move image
//     image.style.left = `${randomX}px`;
//     image.style.top = `${randomY}px`;
// }

// // Move the image every 2 seconds for smoother effect
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
        
        const imageWidth = 300; // Width of the image
        const imageHeight = 300; // Height of the image
        
        // Ensure the image stays within the container boundaries
        const randomX = Math.random() * (containerWidth - imageWidth);
        const randomY = Math.random() * (containerHeight - imageHeight);
        
        return { x: randomX, y: randomY };
    }
    
    // Randomly position each clickable image
    clickableImages.forEach(image => {
        const { x, y } = getRandomPosition();
        image.style.left = `${x}px`;
        image.style.top = `${y}px`;
    });

    // function createNewImages() {
    //     // Create two new images
    //     const newImage1 = document.createElement('img');
    //     const newImage2 = document.createElement('img');

    //     newImage1.src = '/spoon.png'; // Path to the new clickable image
    //     newImage1.alt = 'New Clickable Image';
    //     newImage1.classList.add('click'); // Add the class to make it clickable
    //     newImage1.style.position = 'absolute';
    //     newImage1.style.cursor = 'pointer';

    //     newImage2.src = '/pot.png'; // Path to the non-clickable image
    //     newImage2.alt = 'New Image';
    //     newImage2.style.position = 'absolute';

    //     // Center the new images
    //     const containerWidth = container.clientWidth;
    //     const containerHeight = container.clientHeight;
        
    //     const imageWidth = 300; // Width of the image
    //     const imageHeight = 300; // Height of the image
        
    //     const centerX = (containerWidth - imageWidth) / 2;
    //     const centerY = (containerHeight - imageHeight) / 2;
        
    //     newImage1.style.left = `${centerX}px`;
    //     newImage1.style.top = `${centerY}px`;
        
    //     newImage2.style.left = `${centerX + imageWidth + 20}px`; // Offset by 20px to the right
    //     newImage2.style.top = `${centerY}px`;

    //     // Add the new images to the container
    //     container.appendChild(newImage1);
    //     container.appendChild(newImage2);
        
    //     // Add a click event to the new clickable image
    //     newImage1.addEventListener('click', () => {
    //         alert('New clickable image clicked!');
    //         // You can add more functionality here if needed
    //     });
    // }

    // function changeBackgroundAndAddNewImages() {
    //     // Change the background and add new images after 3 seconds
    //     setTimeout(() => {
    //         document.body.style.backgroundImage = '/boil.jpg'; // Change background image
            
    //         // Ensure the moving image is transformed before creating new images
    //         if (movingImage.src = newImageSrc) {
    //             createNewImages(); // Add new images
    //         }
    //     }, 3000); // Delay in milliseconds
    // }

    // function checkAllImagesHidden() {
    //     // Check if all clickable images are hidden
    //     const allHidden = Array.from(clickableImages).every(image => image.style.display === 'none');
        
    //     if (allHidden) {
    //         // Make the moving image clickable
    //         movingImage.style.cursor = 'pointer'; // Change cursor to pointer
    //         movingImage.addEventListener('click', () => {
    //             // This event will now trigger only if needed
    //             alert('The moving image has been clicked!');
    //         });

    //         // Call the function to change background and add new images
    //         changeBackgroundAndAddNewImages();
    //     }
    // }
    
    clickableImages.forEach(image => {
        image.addEventListener('click', () => {
            // Get the position of the clicked image
            const rect = image.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            
            const imageX = rect.left - containerRect.left;
            const imageY = rect.top - containerRect.top;
            
            // Move the moving image to the position of the clicked image
            movingImage.style.left = `${imageX}px`;
            movingImage.style.top = `${imageY}px`;

            // Add a timeout to hide the clicked image after the move animation completes
            setTimeout(() => {
                image.style.display = 'none';
                checkAllImagesHidden(); // Check if all images are hidden
            }, 3000); // Match this duration with the CSS transition time

            // Check if the clicked image has a data-change-image attribute
            const newImageSrc = image.getAttribute('transform');
            if (newImageSrc, clickedImagesCount === totalImages - 1) {
                // Change the source of the moving image and stop its movement
                setTimeout(() => {
                    movingImage.src = newImageSrc;
                    movingImage.style.transition = 'none'; // Stop further movement
                }); // Match this duration with the CSS transition time
            }
            // Increment the clicked images count
            clickedImagesCount++;
        });
    });
});