function changeBackgroundColor(color){
    let section = document.getElementById('coding-journey');
    section.style.backgroundColor = color;
}

document.getElementById('intro').addEventListener('click', () => changeBackgroundColor("#FF7F0E"));

document.getElementById('react').addEventListener('click', () => changeBackgroundColor("#2CA02C"));

document.getElementById('backend').addEventListener('click', () => changeBackgroundColor("#9467BD"));