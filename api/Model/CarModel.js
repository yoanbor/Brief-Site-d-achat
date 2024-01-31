class CarModel {
    /**
     * Creates a new instance of a CarModel.
     * @param {number} idCarModel - The unique ID of the car model.
     * @param {string} name - The name of the car model.
     * @param {string} colour - The colour of the car model.
     * @param {number} doors - The number of doors the car model has.
     * @param {number} modelPrice - The price of the car model.
     * @param {CarEngine} carEngine - The car engine that the car model is using.
     */
    constructor(idCarModel, name, colour, doors, modelPrice, carEngine) {
        this.idCarModel = idCarModel;
        this.name = name;
        this.colour = colour;
        this.doors = doors;
        this.modelPrice = modelPrice;
        this.carEngine = carEngine;
    }
}

exports.CarModel = CarModel;
