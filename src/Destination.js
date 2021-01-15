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

  //for either lodging Or Flight
  calculateCost(num, priceProperty) {
    const pricePerNum = this[priceProperty]
    const stayCost = pricePerNum * num
    const totalWithFee = this.calculateFee(stayCost)
    return totalWithFee
  }

}

export default Destination;