let triMan = {
    name: "Triathlon Man",
    energy: 200,
    laps: 0,
    activity: "",
    items: []
}
let modifiers
function addMods() {
    for (let i = 0; i < triMan.items.length; i++) {
        switch (triMan.items[i]) {
            case "chafe":
                modifiers += 1
                break;
            case "puke":
                modifiers += .5
                break;
            case "tear": // TODO: fix naming consistency
                modifiers += 9
                break;
        }
    }
    triMan.items = []
}

function update() {
    let energyElem = document.querySelector("#energy");
    energyElem.innerHTML = triMan.energy;
    let lapsElem = document.querySelector("#laps");
    lapsElem.innerHTML = triMan.laps;
    let activityElem = document.querySelector("#activity");
    activityElem.innerHTML = triMan.activity;
}

// TODO: Considate functions
function chafe() {
    triMan.items.push("chafe")
}
function puke() {
    triMan.items.push("puke")
}
function tear() {
    triMan.items.push("tear")
}

function swim() {
    modifiers = 1;
    addMods();
    let expend = 10 * modifiers;
    if (triMan.energy >= expend) {
        triMan.energy -= expend;
        triMan.laps++;
        triMan.activity = "Triathlon Man swam a lap!"
    } else if (triMan.energy < expend && triMan.energy > 0) {
        triMan.energy = 0;
        triMan.laps++;
        triMan.activity = "Triathlon Man swam his final lap!"
    }
    update();
}

function bike() {
    modifiers = 1; 
    addMods();
    let expend = 3 * modifiers;
    if (triMan.energy >= expend) {
        triMan.energy -= expend;
        triMan.laps++;
        triMan.activity = "Triathlon Man biked a lap!"
    } else if (triMan.energy < expend && triMan.energy > 0) {
        triMan.energy = 0;
        triMan.laps++;
        triMan.activity = "Triathlon Man biked his final lap!"
    }
    update();
}

function run() {
    modifiers = 1
    addMods() 
    let expend = 6 * modifiers 
    if (triMan.energy >= expend) {
        triMan.energy -= expend;
        triMan.laps++;
        triMan.activity = "Triathlon Man ran a lap!"
    } else if (triMan.energy < expend && triMan.energy > 0) {
        triMan.energy = 0;
        triMan.laps++;
        triMan.activity = "Triathlon Man ran his final lap!"
    }
    update();
}

function reset() {
    triMan.energy = 200;
    triMan.laps = 0;
    triMan.activity = "";
    triMan.items = []
    update();
}

update();