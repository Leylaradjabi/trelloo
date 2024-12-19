import { setupColumnCardAddition, setupDropZone } from './column.js';
import { setupDragAndDrop } from './card.js';

export function setupExistingColumns(board) {
    // Инициализируем все колонки
    document.querySelectorAll('.column').forEach(column => {
        setupColumnCardAddition(column);  // Добавляем обработчик для добавления карточек
        setupDropZone(column.querySelector('.column-content'));  // Настроить зону для перетаскивания
    });

    // Инициализируем все карточки
    document.querySelectorAll('.card').forEach(card => {
        card.draggable = true;  // Устанавливаем карточки перетаскиваемыми
        setupDragAndDrop(card);  // Добавляем обработчики перетаскивания
    });
}
