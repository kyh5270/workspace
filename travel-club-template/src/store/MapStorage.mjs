let uniqueInstance;

class MapStorage {

    constructor() {
        if(uniqueInstance) {
            return uniqueInstance;
        }
        this._clubMap = new Map();
        uniqueInstance = this;
    }

    get clubMap() {
        return this._clubMap;
    }

}

let map01 = new MapStorage();
let map02 = new MapStorage();

// 아래 2개 console이 true면 singleton 구현.
console.log(map01 === map02);
console.log(map01.clubMap === map02.clubMap);

export default new MapStorage();
