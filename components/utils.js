export function createElement(tag, className = '', attributes = {}, children = []) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    for (const attr in attributes) el.setAttribute(attr, attributes[attr]);
    children.forEach(child => el.append(typeof child === 'string' ? document.createTextNode(child) : child));
    return el;
}
