/* 캡슐화 (Encapsulation) - 인터페이스(Interface) */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 자동차 클래스(Class)
var Car = /** @class */ (function () {
    function Car() {
        this.getType = function () {
            return "Car";
        };
    }
    return Car;
}());
// 기차 클래스(Class)
var Train = /** @class */ (function () {
    function Train() {
        this.getType = function () {
            return "Train";
        };
        this.getSpeed = function () {
            return 0;
        };
    }
    return Train;
}());
// 비행기 클래스(Class)
var Plane = /** @class */ (function () {
    function Plane() {
        this.getType = function () {
            return "Plane";
        };
    }
    return Plane;
}());
/* 다형성 (Polymorphism) - 오버라이드(Override), 오버로딩(Overloading) */
var KTX = /** @class */ (function (_super) {
    __extends(KTX, _super);
    function KTX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getBrand = function () {
            return "Korea Train Express";
        };
        //오버라이드(Override)
        _this.getSpeed = function () {
            return 300;
        };
        return _this;
    }
    return KTX;
}(Train));
function getEnergyEfficiency(Distance, Fuel) {
    if (typeof Fuel === "number") {
        return Distance / Fuel;
    }
    else if (typeof Fuel === "string") {
        return Distance / parseInt(Fuel);
    }
}
var instanceKTX = new KTX();
console.log(instanceKTX.getSpeed());
console.log(getEnergyEfficiency(450, 15));
console.log(getEnergyEfficiency(450, "20"));
