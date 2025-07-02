// Create a hacking simulator which has green background and shows these messages with random delay of 1 to 7 seconds

//     Initializing Hacking...
//     Reading your Files...
//     Password files detected...
//     Sending all personal and password files to server...
//     Cleaning up...

//     The three dots most blink like a real terminal.



async function randomDelay() {
    return new Promise((resolve, reject) => {
        const delay = 1 + Math.random() * 6;
        setTimeout(() => {
            resolve();
        }, delay * 1000);
    })
}

async function additem(item) {
    await randomDelay();
    const div = document.createElement("div");
    div.innerText = item;
    document.body.append(div);
}

async function main() {
    setInterval(() => {
        let last = document.body.lastElementChild;
        if(last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
        }
        else {
            last.innerHTML += ".";
        }
    }, 500);

    let text = ["Initializing Hacking", "Reading your Files", "Password files detected", "Sending all personal and password files to server", "Cleaning up"];

    for (const item of text) {
        await additem(item);
    }
}

main();