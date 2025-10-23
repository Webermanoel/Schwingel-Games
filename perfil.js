const container = document.querySelector('.user-container');

    function criarIcone() {
        const icone = document.createElement('div');
        icone.classList.add('icone');

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        icone.style.left = `${x}px`;
        icone.style.top = `${y}px`;

        container.appendChild(icone);
    }

    
    for (let i = 0; i < 40 ; i++) {
        criarIcone();
    }