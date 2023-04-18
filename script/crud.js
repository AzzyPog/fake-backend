async function postName(name) {
    try {
        const response = await fetch("http://localhost:3000/names", {
            method: "POST", 
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: `${name}`
        })
    });
    const content = await response.json();
    return content;
    } catch (error) {
        console.error();
    }
}

async function getNames() {
    const response = await fetch("http://localhost:3000/names");
    return response.json()
}

export {getNames, postName};