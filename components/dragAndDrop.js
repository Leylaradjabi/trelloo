export function setupDragAndDrop(card) {
    card.addEventListener('dragstart', () => card.classList.add('dragging'));
    card.addEventListener('dragend', () => card.classList.remove('dragging'));
}

export function setupDropZone(zone) {
    zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        const draggingCard = document.querySelector('.dragging');
        if (!draggingCard) return;

        const cards = [...zone.querySelectorAll('.card:not(.dragging)')];
        const afterCard = cards.find(card => e.clientY < card.getBoundingClientRect().top + card.offsetHeight / 2);

        afterCard ? zone.insertBefore(draggingCard, afterCard) : zone.append(draggingCard);
    });
}
