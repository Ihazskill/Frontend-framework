import { h } from "../../framework/src/dom.js";
import {createStore} from "../../framework/src/state.js";

let noteCount = 0;

const notesStore = createStore([]);

notesStore.subscribe(() => {
    console.log("State changed!");
    console.log(notesStore.getState());
});

notesStore.setState([
    { id: 1, title: "My first note" }
]);

notesStore.setState([
    { id: 1, title: "My first note" },
    { id: 2, title: "My second note" }
]);

notesStore.setState([
    { id: 1, title: "Test" },
]);

function createNote() {
    noteCount++;

    const note = h(
        "div",
        { class: "note" },
        h("h3", {}, "Untitled Note " + noteCount),
        h("p", {}, "This is my new note")
    );

    document.querySelector("#notes-list").appendChild(note);
}

const app = h(
    "div",
    { class: "notes-container" },

    h("h1", {}, "My Notes App"),
    h("p", {}, "Welcome to My Notes App"),

    h("button", {
        class: "primary",
        id: "createNote",
        click: createNote
    }, "Create Note"),

    h("button", {
        class: "secondary",
        id: "deleteNote"
    }, "Delete Note"),

    h("div", { id: "notes-list" })
);

document.querySelector("#app").appendChild(app);