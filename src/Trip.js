class Trip {
  constructor(trip, destinations, today) {
    this.id = trip["id"] || Date.now()
    this.userID = trip["userID"]
    this.destination = destinations.find(destination => {
      return destination.id === trip["destinationID"]
    }) || trip["destinationID"]
    this.travelers = trip["travelers"]
    this.date = trip["date"]
    this.duration = trip["duration"]
    this.status = trip["status"] || "pending"
    this.suggestedActivities = trip["suggestedActivities"]
    this.today = today
    console.log('HELLO', this.today, this.id)
    this.endDate = this.setEndDate() 
    this.checkWhen(today)
  }

  setEndDate() {
    const thisDate = this.date
    const splitDate = this.date.split('/')
    const dateRearrange = [splitDate[1], splitDate[2], splitDate[0]].join('/')
    const startDate = new Date(dateRearrange)
    const endDateMilliseconds = startDate.setDate(startDate.getDate() + this.duration)
    const endDate = new Date(endDateMilliseconds)
    return endDate.toLocaleDateString('en-ZA')
  }

  convertDateToNumber(date) {
    console.log('INNUMBER', this.today)
    return date ? parseInt(date.split('/').join('')) : 0
  }

  checkWhen() {
    this.isToday = false
    this.isPast = false
    this.isUpcoming = false

    const todayDateNumber = this.convertDateToNumber(this.today)
    const startDateNumber = this.convertDateToNumber(this.date)
    const endDateNumber = this.convertDateToNumber(this.endDate)

    console.log('numbers', [todayDateNumber, startDateNumber, endDateNumber])

    if (todayDateNumber >= startDateNumber && todayDateNumber <= endDateNumber) {
      this.isToday = true
      return
    } else if (todayDateNumber > endDateNumber) {
      this.isPast = true
      return
    } else {
      this.isUpcoming = true
    }
  }

  updateStatus(status) {
    this.status = status
  }

  calculateTotalCost() {
    if (typeof this.destination === "number") {
      return 'This trip requires a valid destination to estimate cost.'
    } else {
      const lodgingCost = this.destination
      .calculateCost(this.duration, 'estimatedLodgingCostPerDay')
      const flightCost = this.destination
      .calculateCost(this.travelers, 'estimatedFlightCostPerPerson')
      const totalWithFee = this.destination
      .calculateFee(lodgingCost + flightCost)
      return totalWithFee
    }
  }
}

export default Trip;