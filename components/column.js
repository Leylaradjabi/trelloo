import { createCard } from './card.js';
import { createElement } from './utils.js';

export function setupAddColumn(board) {
    const addColumnBtn = document.querySelector('.add-column-btn');

    addColumnBtn.addEventListener('click', () => {
        addColumnBtn.style.display = 'none';
        const inputContainer = createInputContainer();

        addColumnBtn.parentElement.append(inputContainer);
        inputContainer.querySelector('input').focus();

        inputContainer.querySelector('.save-btn').addEventListener('click', () => {
            const columnName = inputContainer.querySelector('input').value.trim();
            if (columnName) {
                const newColumn = createColumn(columnName);
                board.insertBefore(newColumn, addColumnBtn.parentElement);
                setupColumnCardAddition(newColumn); // Привязываем обработчик добавления карточек к новой колонке
            }
            cleanup();
        });

        inputContainer.querySelector('.cancel-btn').addEventListener('click', cleanup);
        inputContainer.querySelector('input').addEventListener('keydown', (e) => {
            if (e.key === 'Enter') inputContainer.querySelector('.save-btn').click();
            if (e.key === 'Escape') cleanup();
        });

        function cleanup() {
            inputContainer.remove();
            addColumnBtn.style.display = 'block';
        }
    });
}

function createColumn(title) {
    const column = createElement('div', 'column', {}, [
        createElement('div', 'column-header', {}, [
            createElement('span', '', {}, [title]),
            createElement('button', 'menu-btn', {}, ['...'])
        ]),
        createElement('div', 'column-content'),
        createElement('div', 'column-footer', {}, [
            createElement('button', 'add-card-btn', {}, [createElement('span', '', {}, ['+']), ' Добавить карточку'])
        ])
    ]);

    return column;
}

export function setupColumnCardAddition(column) {
    const addBtn = column.querySelector('.add-card-btn');
    const content = column.querySelector('.column-content');

    addBtn.addEventListener('click', () => {
        column.classList.add('adding');
        const inputContainer = createInputContainer();

        column.querySelector('.column-footer').insertBefore(inputContainer, addBtn);
        inputContainer.querySelector('input').focus();

        inputContainer.querySelector('.save-btn').addEventListener('click', () => {
            const cardText = inputContainer.querySelector('input').value.trim();
            if (cardText) content.append(createCard(cardText));
            cleanup();
        });

        inputContainer.querySelector('.cancel-btn').addEventListener('click', cleanup);
        inputContainer.querySelector('input').addEventListener('keydown', (e) => {
            if (e.key === 'Enter') inputContainer.querySelector('.save-btn').click();
            if (e.key === 'Escape') cleanup();
        });

        function cleanup() {
            inputContainer.remove();
            column.classList.remove('adding');
        }
    });
}

function createInputContainer() {
    const input = createElement('input', 'card-input', { type: 'text', placeholder: 'Введите название' });
    const saveBtn = createElement('button', 'save-btn', {}, ['Добавить']);
    const cancelBtn = createElement('button', 'cancel-btn', {}, ['Отмена']);
    return createElement('div', 'input-container', { style: 'padding: 0.8rem;' }, [
        input,
        createElement('div', 'card-actions', {}, [saveBtn, cancelBtn])
    ]);
}
