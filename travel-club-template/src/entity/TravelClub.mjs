class TravelClub {
    // 구성요소
    // 1. 데이터 속성
    // 2. 메소드
    // 3. 초기화 메소드 -> 생성자(Constructor)

    constructor(name, intro) {
        this._name = name;
        this._intro = intro;
        this._foundedDate = new Date();
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }
}

let newClub = new TravelClub('TestClub', 'TestIntro');
console.log(newClub.name);
console.log(newClub);

newClub.name = 'NewName';

console.log(newClub);

// let newClub = new TravelClub('Jeju Club', 'Go Jeju Island');