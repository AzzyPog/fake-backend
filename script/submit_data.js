import {postName} from "./crud.js";

const inputName = document.querySelector("#input-name");
const submitButton = document.querySelector("#submit-btn");


submitButton.addEventListener("click", async(event) => {
    event.preventDefault();

    const name = inputName.value;
    if (name != "") {
        await postName(name);
    }
});