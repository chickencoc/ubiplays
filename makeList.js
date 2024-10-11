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
    return new Array(JSON.parse(nvl(json)));
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
    
    const obj = { type: 'in', group: 'none', name: "kim"}

    const list = [
        { type: 'in', group: 'none', name: "kim"},
        { type: 'in', group: 'none', name: "lee"},
        { type: 'out', group: 'none', name: "park"},
        { type: 'in', group: 'kim1', name: "kim1"},
        { type: 'in', group: 'kim1', name: "lee1"},
        { type: 'in', group: 'kim1', name: "park1"},
    ]
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
        list.filter(obj => obj.name == name)
    }

    return list
}

function getGiftList(prefer, price, name) {
    let list = getItem(giftList);
    if(nvl(prefer)) {
        list.filter(obj => obj.prefer >= prefer.min && obj.prefer <= prefer.max)
    }
    if(nvl(price)) {
        list.filter(obj => obj.price >= price.min && obj.price <= price.max)
    }
    if(nvl(name)) {
        list.filter(obj => obj.name == name)
    }

    return list
}

// ------------------



// ------------------

function sampleGet() {
    document.querySelector("div.front").innerText= getItem(guestList.toString())
}

function sampleGuest() {

    const list = [
        { type: 'in', group: 'none', name: "kim"},
        { type: 'in', group: 'none', name: "lee"},
        { type: 'out', group: 'none', name: "park"},
        { type: 'in', group: 'kim1', name: "kim1"},
        { type: 'in', group: 'kim1', name: "lee1"},
        { type: 'in', group: 'kim1', name: "park1"},
    ]

    setItem(guestList, JSON.stringify(list))
}

function sampleGift() {

    const list = [
        { prefer: '9', price: 400000, name: "gift1"},
        { prefer: '8', price: 45000, name: "gift2"},
        { prefer: '8', price: 30000, name: "gift3"},
        { prefer: '7', price: 125000, name: "gift4"},
        { prefer: '5', price: 140000, name: "gift5"},
        { prefer: '2', price: 60000, name: "gift6"},
        { prefer: '1', price: 550000, name: "gift7"},
        { prefer: '0', price: 10000, name: "gift8"},
    ]

    setItem(giftList, JSON.stringify(list))
}

function sampleGuestRatio() {
    const ratio = {t: 10000, a: 100, b: 494.06, c: 4549.50, d: 329.70, e: 2617.82, f: 121.78, g: 990.10, h: 797.03}
}

sampleGuest()
sampleGift()

