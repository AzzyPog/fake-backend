import { getNames } from "./crud.js";

const submitNames = document.querySelector("#submitNames");


async function showNames() {
    try {
        const names = await getNames();
        
        for(let i = 0; i < names.length; i++) {
            submitNames.innerHTML += `
            <p class="names">
                ${names[i].name}
            </p>
            `
        }
    } catch (error) {
      console.log(error)
    }
} showNames()