function openTab(evt, tabName) {
    const panels = document.querySelectorAll('.tab-panel');
    const links = document.querySelectorAll('.nav-link');

    panels.forEach(p => {
        p.classList.remove('active');
    });

    links.forEach(l => {
        l.classList.remove('active');
    });

    const target = document.getElementById(tabName);
    if (target) {
        target.classList.add('active');
    }

    if (evt && evt.currentTarget) {
        evt.currentTarget.classList.add('active');
    }
}

const modal = document.getElementById("image-modal");
const img = document.getElementById("profile-img");
const modalImg = document.getElementById("modal-content");

if (img) {
    img.onclick = function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
    }
}

if (modal) {
    modal.onclick = function() {
        modal.style.display = "none";
    }
}

window.onload = () => {
    const initialTab = document.getElementById('about');
    if (initialTab) {
        initialTab.classList.add('active');
    }
};