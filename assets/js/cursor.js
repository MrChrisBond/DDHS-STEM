const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

document.addEventListener('mousedown', () => {
    cursor.classList.add('active'); // Enlarge the cursor on click
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('active'); // Return to normal size
});
