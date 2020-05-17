function clickCounter() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + getMulti();
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById('clicker').style.backgroundColor = randomColors();
        document.getElementById("result").innerHTML = localStorage.clickcount;
        checkStoreItems();
    } else {
        document.getElementById("result").innerHTML = ":(";
    }
}

function getMulti() {
    //get the multiplier
    if(localStorage.multi){
        localStorage.multi = Number(localStorage.multi)
    } else {
        localStorage.multi = 1;
    }
    return localStorage.multi * 1;
}

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function autoclick(reduce) {
    //activating autoclick cost 100
    localStorage.clickcount = Number(localStorage.clickcount)-100;
    document.getElementById("result").innerHTML = localStorage.clickcount;
    let timeout = 10000 - reduce;
    let autoclick = document.getElementById('autoclick');
    if (autoclick.checked === true) {
        setInterval(clickButton, timeout);
    }
}

function fasterClick(cost, reduce) {
    if(localStorage.clickcount >= cost){
        localStorage.clickcount = Number(localStorage.clickcount)-cost;
        document.getElementById("result").innerHTML = localStorage.clickcount;
        autoclick(reduce)
    } else {
        alert('Click More!');
    }
}

function checkStoreItems() {
    if(localStorage.clickcount > 100){
        document.getElementById('store').style.display = 'block';
        checkAchievements();
    }
}


function clickButton() {
    document.getElementById('clicker').click();
}

function increaseMultiplier() {
    if(localStorage.clickcount >= 300){
        localStorage.clickcount = Number(localStorage.clickcount)-300;
        document.getElementById("result").innerHTML = localStorage.clickcount;
        localStorage.multi = Number(localStorage.multi) + 1;
        document.getElementById('multiplier').innerHTML = localStorage.multi;
    } else {
        alert('Click More!');
    }

}

function checkAchievements() {
    if(localStorage.clickcount === '5'){
        alert('achievement Unlocked!: Tester')
    }
    if(localStorage.clickcount === '100'){
        alert('achievement Unlocked!: Halfway There')
    }
    if(localStorage.clickcount === '100'){
        alert('achievement Unlocked!: Autoclick Unlocked, but it will take all your money')
    }
    if(localStorage.clickcount === '150'){
        alert('achievement Unlocked!: Multiply.')
    }
    if(localStorage.clickcount === '500'){
        alert('achievement Unlocked!: yay!')
    }
}
