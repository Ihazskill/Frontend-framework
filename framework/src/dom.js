export function h(tag, attributes = {}, ...children) {
    // List of supported events in this framework
    const events = ['click', 'input', 'submit', 'keydown', 'change'];

    const element = document.createElement(tag);

    Object.entries(attributes).forEach(([key ,value]) =>{
        if (events.includes(key) && typeof value === 'function'){
            element.addEventListener(key,value);
        }else{

        element.setAttribute(key, value);
    }});

    children.forEach(child => {
        if (typeof child === "string") {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    });

    return element;
}