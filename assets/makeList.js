const guestList = "guestList"; // 사람 목록
const originGuestList = "originGuestList";  // 원본 사람 목록
const giftList = "giftList";  // 선물 목록
const originGiftList = "originGiftList";  // 원본 선물 목록
const guestChance = "guestChance"; // 사용될 사람 확률
const giftChance = "giftChance"; // 사용될 선물 확률

function nvl(i) {
    return i == undefined || i == "" ? undefined : i;
}
/**
 * 랜덤 숫자 반환 함수
 */
function getRandomInt(min, max) {
    // Create byte array and fill with 1 random number
    var byteArray = new Uint16Array(1);
    window.crypto.getRandomValues(byteArray);

    var range = max - min + 1;
    var max_range = 65536;

    if (byteArray[0] >= Math.floor(max_range / range) * range)
        return getRandomInt(min, max);
    return min + (byteArray[0] % range);
}

function getItem(key) {
    const json = localStorage.getItem(key);
    const item = nvl(json);
    return item && JSON.parse(item);
}

function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return value;
}

function getGuestList(type) {
    let list = getItem(guestList);
    if(nvl(type)) {
        list = list.filter(obj => obj.type == type)
    }
    console.log(list)
    return list
}

function getGiftList(price, prefer, name) {
    let list = getItem(giftList);
    if(nvl(price)) {
        list = list.filter(obj => obj.type >= price.min && obj.type <= price.max)
    }
    if(nvl(prefer)) {
        list = list.filter(obj => obj.group >= prefer.min && obj.group <= prefer.max)
    }
    if(nvl(name)) {
        list = list.filter(obj => obj.name == name)
    }

    return list
}

// ------------------



// ------------------

function sampleGuest() {

    const list = [
        { type: 'in', group: 'none', name: "kim"},
        { type: 'in', group: 'none', name: "lee"},
        { type: 'out', group: 'none', name: "park"},
        { type: 'in', group: 'kim1', name: "kim1"},
        { type: 'in', group: 'kim1', name: "lee1"},
        { type: 'in', group: 'kim1', name: "park1"},
    ]

    setItem(guestList, list)
}

function sampleGift() {

    const list = [
        { type: 400000, group: '9', name: "gift1"},
        { type: 45000, group: '8', name: "gift2"},
        { type: 30000, group: '8', name: "gift3"},
        { type: 125000, group: '7', name: "gift4"},
        { type: 140000, group: '5', name: "gift5"},
        { type: 60000, group: '2', name: "gift6"},
        { type: 550000, group: '1', name: "gift7"},
        { type: 10000, group: '0', name: "gift8"},
    ]

    setItem(giftList, list)
}

function sampleGuestRatio() {
    const ratio = {t: 10000, a: 100, b: 494.06, c: 4549.50, d: 329.70, e: 2617.82, f: 121.78, g: 990.10, h: 797.03}
}

