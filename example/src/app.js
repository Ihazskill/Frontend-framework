import { h } from "../../framework/src/dom.js";

const app = h(
    "div",
    h("h1", 'Notes App'),
    h("p", "Welcome to my Notes App"),
    h("p", "You have 0 notes"),
    h("button", "Create Note")
);

document.querySelector("#app").appendChild(app);