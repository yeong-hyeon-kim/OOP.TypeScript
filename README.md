## 📕 프로젝트 개요(Introduce Project)

### OOP(Object Oriented Programming)

* 객체지향의 특성인 추상화, 다형성, 상속, 은닉성의 개념과 사용 이유를 알아봅니다.

## 🏷️ 목차(Index)

1. [캡슐화 (Encapsulation)](#캡슐화-(Encapsulation))
2. [추상화 (Abstraction)](#추상화-(Abstraction))
3. [상속성 (Inheritance)](#상속성-(Inheritance))
4. [다형성 (Polymorphism)](#다형성-(Polymorphism))

### 캡슐화 (Encapsulation)

* [인터페이스(Interface)]("")
  * 은닉화(Hiding) : 공통된 특징(행위)만 선언하고 구체적인 내용은 각 클래스에서 구체화하도록 유도.
  * 느슨한 결합(Loose Coupling) : 하위 타입인 각 클래스들은 상위 타입인 인터페이스 타입에 포함되어 인터페이스를 상속하는 클래스라면 타입에 관계없이 매개변수로 받을 수 있다.
  > 매개변수 타입이 특정 클래스 타입이 아니므로 의존성이 줄어든다.
* 속성(Property)
  * `get`, `set`을 이용하여 외부에서 데이터 접근 수준을 지정할 수 있다.
  * 값을 캡슐화(은닉) 할 수 있다.

### 추상화 (Abstraction)

* [추상 클래스, 메서드]("")
  * 노트북, 스마트폰 모두 컴퓨터(Computer)라고 일반화(Generalization) 할 수 있는게 추상화이다.
  * 클래스간의 공통점을 찾아내서 공통의 조상을 만드는 작업이다.
  > 노트북, 스마트폰의 공통 조상은 컴퓨터다.
* [인터페이스]("")
  * 특정 클래스가 가지는 의존성을 인터페이스로 제거함으로써 코드 유연성을 높일수 있다.
  * 인터페이스는 자신이 정의한 메소드가 인터페이스를 상속하는 클래스에 무조건 존재한다는 것을 보장한다.
  > 클래스가 인터페이스를 상속받으면 구현하는 걸 강제하기 때문이다.
* [의존성 주입(Dependency Injection)]("")
  * 의존관계?
    * A가 B를 의존한다.
    * 클래스(`A`)가 특정 클래스(`B`) 타입을 사용하고 있다.  
  * 문제점
    * 외부 클래스(`A`)에서 특정 클래스(`B`)의 메소드(`M1`)를 사용하고 있을때 클래스(`B`)를 클래스(`C`)로 변경하면 클래스(`C`)에 메소드(`M1`) 없다면 더이상 메소드(`M1`)를 사용할 수 없다.
  * 해결방안
    * 공통 상위 타입 : [인터페이스(Interface)]("")를 상속받아 `"A가 B를 의존한다."`는 명제를 `"A와 B는 인터페이스를 의존한다."`로 바꿔 의존성을 줄일 수 있다.
    * 메소드(`M1`)를 정의한 인터페이스를 상속하는 클래스라면 무조건 메소드(`M1`)를 구현(재정의)하므로 클래스가 변경되어도 코드를 수정할 필요가 없다.

### 상속성 (Inheritance)

* [하위 클래스]("")
  * 상위 클래스(공통 조상)를 상속받아 하위 클래스(자신)을 구현(구체화, 재정의), 확장하는 작업이다.
  > 컴퓨터를 노트북 또는 스마트폰으로 구체화할 수 있다.

### 다형성 (Polymorphism)

* [오버라이드(Override)]("")
  * 상위 클래스의 함수나 메서드를 재정의 하는 것을 의미합니다.
  * 이름과 매개 변수는 동일하나 구체적인 내용은 재정의 합니다.

* [오버로딩(Overloading)]("")
  * 동일한 이름에 매개 변수만 다른 여러 버전을 만드는 것을 의미합니다.
  * 이름이 같고 매개 변수의 개수나 타입이 달라야 합니다.

* 상위 클래스 메서드를 `다`양한 `형`태로 이용할 수 있는 `성`질.
* 스마트폰을 갤럭시나 아이폰으로 다양한 형태로 만들 수 있다.

## 💻 개발 환경(Develop Environment)

### 세부 환경(Environment Detail)

||운영체제(OS)|언어(Language)|프레임워크(Framework)|종속성(Dependency)|
|-|:-:|:-:|:-:|:-:|
|명칭(Name)|![Windows](https://img.shields.io/badge/Windows-0078D6?style=flat-square&logo=Windows&logoColor=white)|![TYPESCRIPT](https://img.shields.io/badge/TYPESCRIPT-3178C6?style=flat-square&logo=TypeScript&logoColor=white)|![TS-NODE](https://img.shields.io/badge/TSNODE-3178C6?style=flat-square&logo=ts-node&logoColor=white)|![NPM](https://img.shields.io/badge/NPM-CB3837?style=flat-square&logo=npm&logoColor=white)|
|버전(Version)|`10, 11`|`ES2016`|`10.9.1`|[package.json](./package.json)|

## 📖 비고(Remark)

* NPM(Node Package Manager) 초기화 : `npm init -y`
* 타입스크립트(TypeScript) 패키지 설치 : `npm i -g typescript`
* 타입스크립트 환경설정 : `tsc --init`
  * [tsconfig.json](./tsconfig.json)
* 타입스크립트 컴파일(Compile) :  `tsc`
* 타입스크립트 실행 : `node src/index` `OR` `ts-node ./src/index.ts`
  * [index](./src/index.ts)
