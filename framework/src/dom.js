export function h(tag, ...children) {
    const element = document.createElement(tag);

    children.forEach(child => {
        if (typeof child === "string") {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    });

    return element;
}