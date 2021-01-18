class Trip {
  constructor(trip, destinations) {
    this.id = trip.id || Date.now()
    this.userID = trip.userID
    this.getDestination(destinations, trip.destinationID)
    this.travelers = trip.travelers
    this.date = trip.date
    this.duration = trip.duration
    this.status = trip.status || "pending"
    this.suggestedActivities = trip.suggestedActivities
    this.setEndDate() 
  }
  
  getDestination(destinations, destinationID) {
    const matchingDestination = destinations.find(destination => destination.id === destinationID)

    if (matchingDestination) {
      this.destination = matchingDestination 
    } else {
      this.destination = destinationID
    }
  }

  setEndDate() {
    const splitDate = this.date.split('/')
    const dateRearrange = [splitDate[1], splitDate[2], splitDate[0]].join('/')
    const startDate = new Date(dateRearrange)
    const endDateMilliseconds = startDate.setDate(startDate.getDate() + this.duration)
    const endDate = new Date(endDateMilliseconds)
    this.endDate = endDate.toLocaleDateString('en-ZA')
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