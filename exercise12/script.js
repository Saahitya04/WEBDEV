function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let div = document.createElement("div");
    div.classList.add("card");
    document.querySelector(".container").insertAdjacentElement("beforeend", div);

    let thumb = document.createElement("img");
    div.insertAdjacentElement("afterbegin", thumb);
    thumb.setAttribute("src", thumbnail);

    let dur = document.createElement("span");
    dur.classList.add("duration");
    dur.innerText = duration;
    div.insertAdjacentElement("beforeend", dur);

    let ttl = document.createElement("h2");
    div.insertAdjacentElement("beforeend", ttl);
    ttl.innerText = title;
    
    let detail = document.createElement("div");
    detail.classList.add("detail");

    let Degree = "";
    if (views >= 1000 && views < 1000000) {
        views = Math.floor(views/1000);
        Degree = "k";
    }
    else if (views >= 1000000 && views < 1000000000) {
        views = Math.floor(views/1000000);
        Degree = "M";
    }
    else if (views >= 1000000000) {
        views = Math.floor(views/1000000000);
        Degree = "B";
    }
    let viewspan = `${views}${Degree}`;

    let comp = `${cName} • ${viewspan} views • ${monthsOld} months ago`;
    detail.innerText = comp;
    div.insertAdjacentElement("beforeend", detail);
}


document.body.style.fontFamily = `"Roboto", "Arial", sans-serif`;

createCard("Installing VS Code and How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", 63539000, 2, "10:00", `thumbnail.png`);



