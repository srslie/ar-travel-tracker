class Trip {
  constructor(trip, destinations, todayDate) {
    this.id = trip["id"] || Date.now()
    this.userID = trip["userID"]
    this.destination = destinations.find(destination => destination.id === trip["destinationID"]) || trip["destinationID"]
    this.travelers = trip["travelers"]
    this.date = trip["date"]
    this.duration = trip["duration"]
    this.status = trip["status"] || "pending"
    this.suggestedActivities = trip["suggestedActivities"]
    this.isToday = this.checkIfToday(todayDate)
  }

  checkIfToday(todayDate) {
    const splitDate = this.date.split('/')
    const dateRearrange = [splitDate[1], splitDate[2], splitDate[0]].join('/')
    console.log('hello', splitDate, dateRearrange)
    const dateRangeFill = Array(this.duration).fill(dateRearrange)
    let dateRange = []
    dateRangeFill.forEach((date, i) => {
      const dateObject = new Date(date)
      if (i = 0) {
        dateRange.push(dateObject)
      } else {
        const dateAgumented = dateObject.setDate(date.getDate() += i)
        dateRange.push(dateAgumented)
      }
    })
    const restructuredDates = dateRange.map(dateObject => dateObject.toLocaleDateString('en-ZA'))

    if (restructuredDates.includes(todayDate)) {
      this.isToday = true
    } else {
      this.isToday = false
    }
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