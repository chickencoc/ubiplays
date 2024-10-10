const guestList = "guestList"; // 사람 목록
const exceptList = "exceptList";  // 사람 제외 목록
const giftList = "giftList";  // 선물 목록
const selectGuest = "selectList"; //
const selectGift = "selectGift";
const guestChance = "guestChance";
const giftChance = "giftChance";

function getRandomInt(min, max) {       
    // Create byte array and fill with 1 random number
    var byteArray = new Uint8Array(1);
    window.crypto.getRandomValues(byteArray);

    var range = max - min + 1;
    var max_range = 256;

    if (byteArray[0] >= Math.floor(max_range / range) * range)
        return getRandomInt(min, max);
    return min + (byteArray[0] % range);
}

function getItem(key) {
    const json = localStorage.getItem(key);

    if(json == undefined && json == "") {
        return undefined;
    }

    return JSON.parse(json);
}

function setItem(key, value) {
    localStorage.setItem(key, value);
    
    return value;
}

// 등록
function confirm(params) {
    // const a = document.getElementById("listform")
    // const fd = new FormData(a)
    
    // for(const x of fd.entries()) {
    //     console.log(x)
    // }
    
    const obj = { type: 'in', group: 'none', name: "kim"};

    const list = [
        { type: 'in', group: 'none', name: "kim"},
        { type: 'in', group: 'none', name: "lee"},
        { type: 'out', group: 'none', name: "park"},
        { type: 'in', group: 'kim1', name: "kim1"},
        { type: 'in', group: 'kim1', name: "lee1"},
        { type: 'in', group: 'kim1', name: "park1"},
    ]
}

function check() {
    document.querySelector("div.front").innerText= getItem("a")

    setItem("a", getRandomInt(1, 10));
}

function check2() {
    setItem("a", getRandomInt(1, 10));
}