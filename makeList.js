const guestList = "guestList"; // 사람 목록
const exceptList = "exceptList";  // 사람 제외 목록
const giftList = "giftList";  // 선물 목록
const selectGuest = "selectGuest"; // 사용될 사람 목록
const selectGift = "selectGift"; // 사용될 선물 목록
const guestChance = "guestChance"; // 사용될 사람 확률
const giftChance = "giftChance"; // 사용될 선물 확률

function nvl(i) {
    return i == undefined || i == "" ? undefined : i;
}

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
    return JSON.parse(nvl(json));
}

function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
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
}

function check2() {

    const list = [
        { type: 'in', group: 'none', name: "kim"},
        { type: 'in', group: 'none', name: "lee"},
        { type: 'out', group: 'none', name: "park"},
        { type: 'in', group: 'kim1', name: "kim1"},
        { type: 'in', group: 'kim1', name: "lee1"},
        { type: 'in', group: 'kim1', name: "park1"},
    ]

    setItem("a", JSON.stringify(list));
}

function getGuestList(type, group, name) {
    let list = getItem(guestList);
    if(nvl(type)) {
        list.filter(obj => obj.type == type)
    }
    if(nvl(group)) {
        list.filter(obj => obj.group == group)
    }
    if(nvl(name)) {
        
    }
}
