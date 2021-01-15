class Destination {
  constructor(destination) {
      this.id = destination["id"];
      this.destination = destination["destination"];
      this.estimatedLodgingCostPerDay = destination["estimatedLodgingCostPerDay"];
      this.estimatedFlightCostPerPerson = destination["estimatedFlightCostPerPerson"];
      this.image = destination["image"];
      this.alt = destination["alt"]
  }

  calculateFee(subtotal) {
    return subtotal + (subtotal * .1) 
  }

  calculateCost(num, priceProperty) {
    return this[priceProperty] * num
  }
}

export default Destination;