import { setupAddColumn, setupColumnCardAddition } from './column.js';
import { setupDragAndDrop, setupDropZone } from './dragAndDrop.js';





document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.board');

    setupAddColumn(board);
    document.querySelectorAll('.column').forEach(setupColumnCardAddition);
    document.querySelectorAll('.column-content').forEach(setupDropZone);
    document.querySelectorAll('.card').forEach(card => {
        card.draggable = true;
        setupDragAndDrop(card);
    });
});