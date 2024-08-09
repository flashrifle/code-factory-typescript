/*
    Class 선언하기
 */

class SampleClass {

}

class Game {
    name: string;
    country: string;
    download: number;

    constructor(name: string, country: string, download: number) {
        this.name = name;
        this.country = country;
        this.download = download;
    }

    introduce() {
        return `${this.name}은 ${this.country} 에서 제작된 ${this.download}개의 다운로드를 달성한 게임입니다.`;
    }
}

const starCraft = new Game(
    'star craft',
    'usa',
    100000
)

const retVal = starCraft.introduce();