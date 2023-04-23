import {getNames, deleteName} from "./crud.js";

const submitNames = document.querySelector("#submitNames");


async function showNames() {
    try {
        const names = await getNames();
        
        for(let i = 0; i < names.length; i++) {
            submitNames.innerHTML += `
            <p class="names" id=${names[i].id}>
                ${names[i].name}
            </p>
            `
        }
        const allNames = document.querySelectorAll(".names");
        allNames.forEach(name => {
            name.addEventListener("click", async() => {
                await deleteName(name.id)
            })
        });
    } catch (error) {
      console.log(error);
    }
} showNames();