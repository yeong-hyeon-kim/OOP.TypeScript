/* 캡슐화 (Encapsulation) - 인터페이스(Interface) */

// 교통수단 인터페이스(Interface)
interface Transportation {
  getType(): string;
}

// 자동차 클래스(Class)
class Car implements Transportation {
  getType = (): string => {
    return "Car";
  };
}

// 기차 클래스(Class)
class Train implements Transportation {
  getType = (): string => {
    return "Train";
  };

  getSpeed = (): number => {
    return 0;
  };
}

// 비행기 클래스(Class)
class Plane implements Transportation {
  getType = (): string => {
    return "Plane";
  };
}

/* 상속성(Inheritance) */

class SRT extends Train {
  getBrand = (): string => {
    return "Super Rapid Train";
  };
}

/* 다형성 (Polymorphism) - 오버라이드(Override), 오버로딩(Overloading) */

class KTX extends Train {
  getBrand = (): string => {
    return "Korea Train Express";
  };

  // 오버라이드(Override)
  getSpeed = (): number => {
    return 300;
  };
}

function getEnergyEfficiency(
  Distance: number,
  Fuel: number,
  Weight: number
): number;

// 오버로딩(Overloading)
// 메소드의 이름이 같고, 매개변수의 개수나 타입이 달라야 한다.
// 리턴 값만 다른 것은 오버로딩을 할 수 없다.
function getEnergyEfficiency(Distance: number, Fuel: number): number;
function getEnergyEfficiency(Distance: number, Fuel: string): number;

// 실제 구현은 한 번만 가능하므로 여러 경우에 대한 분기는 함수 본문 내에서 이루어져야 한다.
function getEnergyEfficiency(Distance: any, Fuel: any) {
  if (typeof Fuel === "number") {
    return Distance / Fuel;
  } else if (typeof Fuel === "string") {
    return Distance / parseInt(Fuel);
  }
}

let instanceKTX = new KTX();

console.log(instanceKTX.getSpeed());

console.log(getEnergyEfficiency(450, 15));
console.log(getEnergyEfficiency(450, "20"));

/* 추상화 (Abstraction) */

abstract class Computer {
  private _Model: string;
  private _Brand: string;

  constructor(Model: string, Brand: string) {
    this._Model = Model;
    this._Brand = Brand;
  }

  // propComputer = {
  //   get model(): string {
  //     return super._Model;
  //   },
  //   set model(Model: string) {
  //     super._Model = Model;
  //   },

  //   get brand(): string {
  //     return super._Brand;
  //   },
  //   set brand(Brand: string) {
  //     super._Brand = Brand;
  //   },
  // };

  get model(): string {
    return this._Model;
  }
  set model(Model: string) {
    this._Model = Model;
  }

  get brand(): string {
    return this._Brand;
  }
  set brand(Brand: string) {
    this._Brand = Brand;
  }
}

class SmartPhone extends Computer {
  constructor(Model: string, Brand: string) {
    super(Model, Brand);
  }
}

class Notebook extends Computer {
  constructor(Model: string, Brand: string) {
    super(Model, Brand);
  }
}

let GalayxBook: Notebook = new Notebook("GalayxBook", "Samsung");

console.log(`GalayxBook : ${GalayxBook.brand}`);
