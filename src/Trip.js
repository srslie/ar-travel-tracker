class Trip {
  constructor(trip) {
    this.id = trip["id"] || Date.now()
    this.userID = trip["userID"]
    this.destinationID = trip["destinationID"]
    this.travelers = trip["travelers"]
    this.date = trip["date"]
    this.duration = trip["duration"]
    this.status = trip["status"] || "pending"
    this.suggestedActivities = trip["suggestedActivities"]
  }

  updateStatus(status) {
    this.status = status
  }

  calculateTotalCost(destinations) {
    const destination = destinations.find(destination => destination.id === this.destinationID)
    const lodgingCost = destination.calculateCost(this.duration, 'estimatedLodgingCostPerDay')
    const flightCost = destination.calculateCost(this.travelers, 'estimatedFlightCostPerPerson')
    const totalWithFee = destination.calculateFee(lodgingCost + flightCost)
    return totalWithFee
  }

}

export default Trip;