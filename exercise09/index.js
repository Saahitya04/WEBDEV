/* Create a business name generator by combining list
of adjectives and shop name and another word

Adjectives:
- Crazy
- Amazing
- Fire

Shop Name:
- Engine
- Food
- Garments

Another Word:
- Hub
- Bros
- Limited

Lists are not allowed
*/

function adjgen(adj) {
    let random = Math.random();
    if(random < 0.33) {
        return adj[0];
    }
    else if(random < 0.66) {
        return adj[1];
    }
    else {
        return adj[2];
    }
}

function shopgen(shop) {
    let random = Math.random();
    if(random < 0.33) {
        return shop[0];
    }
    else if(random < 0.66) {
        return shop[1];
    }
    else {
        return shop[2];
    }
}

function anotherwordgen(anotherword) {
    let random = Math.random();
    if(random < 0.33) {
        return anotherword[0];
    }
    else if(random < 0.66) {
        return anotherword[1];
    }
    else {
        return anotherword[2];
    }
}

function businessNameGenerator() {
    const adj = {
        0: "Crazy",
        1: "Amazing",
        2: "Fire"
    }

    const shop = {
        0: "Engine",
        1: "Food",
        2: "Garments"
    }

    const anotherword = {
        0: "Hub",
        1: "Bros",
        2: "Limited"
    }

    let adjective = adjgen(adj);
    let shopName = shopgen(shop);
    let anotherWord = anotherwordgen(anotherword);

    alert(`${adjective} ${shopName} ${anotherWord}`);
}

businessNameGenerator();