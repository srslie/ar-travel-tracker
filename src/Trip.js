class Trip {
  constructor(trip, destinations) {
    this.id = trip["id"] || Date.now()
    this.userID = trip["userID"]
    this.destination = destinations.find(destination => destination.id === trip["destinationID"]) || trip["destinationID"]
    this.travelers = trip["travelers"]
    this.date = trip["date"]
    this.duration = trip["duration"]
    this.status = trip["status"] || "pending"
    this.suggestedActivities = trip["suggestedActivities"]
  }

  updateStatus(status) {
    this.status = status
  }

  calculateTotalCost() {
    if (typeof this.destination === "number") {
      return 'This trip requires a valid destination to estimate cost.'
    } else {
      const lodgingCost = this.destination.calculateCost(this.duration, 'estimatedLodgingCostPerDay')
      const flightCost = this.destination.calculateCost(this.travelers, 'estimatedFlightCostPerPerson')
      const totalWithFee = this.destination.calculateFee(lodgingCost + flightCost)
      return totalWithFee
    }
  }
}

export default Trip;