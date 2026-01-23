function openSection(id) {
    const sections = document.querySelectorAll('.tab-content');
    const target = document.getElementById(id);

    sections.forEach(s => {
        s.classList.remove('active');
        setTimeout(() => { if (!s.classList.contains('active')) s.style.display = 'none'; }, 400);
    });

    setTimeout(() => {
        if (id === 'works') target.style.display = 'grid';
        else if (id === 'contacts') target.style.display = 'flex';
        else target.style.display = 'block';
        
        setTimeout(() => { target.classList.add('active'); }, 50);
    }, 400);
}

function makeSnow() {
    const container = document.getElementById('snow');
    for (let i = 0; i < 50; i++) {
        const flake = document.createElement('div');
        flake.className = 'snow-flake';
        const size = Math.random() * 4 + 2 + 'px';
        flake.style.width = size; flake.style.height = size;
        flake.style.left = Math.random() * 100 + 'vw';
        flake.style.animationDuration = (Math.random() * 3 + 4) + 's';
        flake.style.animationDelay = Math.random() * 5 + 's';
        flake.style.opacity = Math.random() * 0.7 + 0.3;
        container.appendChild(flake);
    }
}

window.onload = () => {
    makeSnow();
    const first = document.getElementById('about');
    first.style.display = 'block';
    setTimeout(() => first.classList.add('active'), 100);
};