document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.querySelector('.envelope');
    
    envelope.addEventListener('click', function() {
        this.classList.toggle('active');
        
        const heart = this.querySelector('.heart i');
        if (this.classList.contains('active')) {
            heart.style.color = '#ff477e';
            heart.classList.remove('fas', 'fa-heart');
            heart.classList.add('fas', 'fa-envelope-open');
        } else {
            heart.style.color = 'white';
            heart.classList.remove('fas', 'fa-envelope-open');
            heart.classList.add('fas', 'fa-heart');
        }
    });
    
    // Efecto de escritura para el título (opcional)
    const title = document.querySelector('h1');
    const originalText = title.innerHTML;
    title.innerHTML = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            title.innerHTML += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Inicia el efecto de escritura
    setTimeout(typeWriter, 1000);
});

// Función para compartir por WhatsApp
    window.shareOnWhatsApp = function() {
        // REEMPLAZA ESTA URL CON LA QUE VAS A OBTENER
        const cartaURL = "https://tu-carta-sanvalentin.netlify.app";
        
        const mensaje = `💌 *¡Feliz San Valentín!* 💌

Te he hecho una carta digital especial ✨

Ábrela aquí: ${cartaURL}

Con todo mi ❤️`;

        const whatsappURL = `https://wa.me/?text=${encodeURIComponent(mensaje)}`;
        window.open(whatsappURL, '_blank');
        
        // Muestra el link en pantalla
        const linkDisplay = document.getElementById('linkDisplay');
        linkDisplay.style.display = 'block';
        linkDisplay.innerHTML = `<strong>Enlace para compartir:</strong><br>${cartaURL}`;
    };

    console.log("📱 PARA COMPARTIR POR WHATSAPP:");
    console.log("1. Ve a: https://app.netlify.com/drop");
    console.log("2. Arrastra tu carpeta con los 3 archivos");
    console.log("3. Copia el link que te den (ej: https://tunombre-123.netlify.app)");
    console.log("4. Pega ese link en la variable 'cartaURL' en script.js");