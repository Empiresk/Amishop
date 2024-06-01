document.addEventListener("DOMContentLoaded", function () {
    const priceElement = document.getElementById('price');
    const wilayaElement = document.getElementById('wilaya');
    const blackButton = document.getElementById('black');
    const greenButton = document.getElementById('green');
    const productImageBlack = document.getElementById('productImageBlack');
    const productImageGreen = document.getElementById('productImageGreen');

    const prices = {
        'Adrar': 1000,
        'Alger': 1500,
        'Oran': 1300,
        'Bouira': 1200,
        'Chelf': 1400
    };

    function updatePrice() {
        const selectedWilaya = wilayaElement.value;
        priceElement.value = prices[selectedWilaya] + ' DZD';
    }

    wilayaElement.addEventListener('change', updatePrice);

    // Initial price update
    updatePrice();

    function changeProductImage(color) {
        if (color === 'black') {
            productImageBlack.style.display = 'block';
            productImageGreen.style.display = 'none';
        } else if (color === 'green') {
            productImageBlack.style.display = 'none';
            productImageGreen.style.display = 'block';
        }
    }

    blackButton.addEventListener('click', function () {
        changeProductImage('black');
    });

    greenButton.addEventListener('click', function () {
        changeProductImage('green');
    });

    document.getElementById('productForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const templateParams = {
            from_name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            size: document.getElementById('size').value,
            wilaya: document.getElementById('wilaya').value,
            price: document.getElementById('price').value,
            product_image: productImageBlack.style.display === 'block' ? productImageBlack.src : productImageGreen.src
        };

        emailjs.send('service_03i4vwh', 'template_7mupmbb', templateParams, 'v63s_ADkIVy3ivrBr')
            .then(function (response) {
                alert('Email envoyé avec succès !');
            }, function (error) {
                alert('Échec de l\'envoi de l\'email : ' + JSON.stringify(error));
            });
    });
});
