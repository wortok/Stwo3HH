document.addEventListener('DOMContentLoaded', function() {
    const productId = localStorage.getItem('productId');

    const products = {
        '1': {
            name: 'Snapchat Account Hack',
            images: ['stock/snaphack.gif', 'stock/version.png'],
            description: 'What will be provided?',
            details: '<p class="daun">1. Snapchat account password.<br>2. Snapchat account my eyes code.<br>3. Two-Factor authenticator.<br>4. Support, Guaranteed Login.<br>*Order status shows up in Your Purchases page.</p>',
            price: '150$'
        },
        '2': {
            name: 'Instagram Account Hack',
            images: ['stock/ighack.gif', 'stock/version3.png'],
            description: 'What will be provided?',
            details: '<p class="daun">1. Instagram account password.<br>2. Secured login.<br>3. Two-Factor authenticator.<br>4. Support, Guaranteed Login.<br>*Order status shows up in Your Purchases page.</p>',
            price: '90$'
        },
        '3': {
            name: 'Facebook Account Hack',
            images: ['stock/fbhack.gif', 'stock/version4.png'],
            description: 'What will be provided?',
            details: '<p class="daun">1. Facebook account password.<br>2. Secured login.<br>3. Two-Factor authenticator.<br>4. Support, Guaranteed Login.<br>*Order status shows up in Your Purchases page.</p>',
            price: '110$'
        },
        '4': {
            name: 'Gmail Account Hack',
            images: ['stock/gmail.gif', 'stock/version5.png'],
            description: 'What will be provided?',
            details: '<p class="daun">1. Gmail account password.<br>2. Secured login.<br>3. Two-Factor authenticator.<br>4. Support, Guaranteed Login.<br>*Order status shows up in Your Purchases page.</p>',
            price: '110$'
        },
        '5': {
            name: 'Anubis BotNet Tool',
            images: ['stock/anubis.gif', 'stock/anubis0.jpg'],
            description: 'What will be provided?',
            details: '<p class="daun">1. Anubis license key.<br>2. Anubis APK builder.<br>3. PDF and Video tutorials.<br>4. Support.<br>*Order status shows up in Your Purchases page.<br><br>Please leave the popup empty before purchasing.</p>',
            price: '230$'
        },
        '6': {
            name: 'Social-Hacks Hacking Tool',
            images: ['stock/shtool.gif', 'stock/version5.png'],
            description: 'What will be provided?',
            details: '<p class="daun">1. S-H tool license key.<br>2. S-H Tool.<br>3. PDF and Video tutorials.<br>4. Support.<br>*Order status shows up in Your Purchases page.<br><br>Please leave the popup empty before purchasing.</p>',
            price: '280$'
        }
        
    };

    if (productId && products[productId]) {
        const product = products[productId];
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-description').innerHTML = product.description + product.details;
        document.getElementById('product-price').textContent = product.price;

        const mainImage = document.getElementById('mainImage');
        const thumbnailsContainer = document.querySelector('.thumbnails');

        // Function to update the main image
        function updateMainImage(imageSrc) {
            mainImage.src = imageSrc;
        }

        // Function to create thumbnails
        function createThumbnail(imageSrc) {
            const thumbnail = document.createElement('img');
            thumbnail.classList.add('thumbnail');
            thumbnail.src = imageSrc;
            thumbnail.alt = 'Thumbnail';
            thumbnail.addEventListener('click', function() {
                updateMainImage(imageSrc);
            });
            return thumbnail;
        }

        // Create thumbnails
        product.images.forEach(imageSrc => {
            const thumbnail = createThumbnail(imageSrc);
            thumbnailsContainer.appendChild(thumbnail);
        });

        // Set initial main image
        updateMainImage(product.images[0]);
    } else {
        // Handle the case where product ID is not found
    }
});
