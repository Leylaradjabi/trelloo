import { createElement } from './utils.js';


export function createCard(text) {
    const card = createElement('div', 'card', { draggable: 'true' }, [text]);
    return card;
}