class Trip {
  constructor(trip, destinations, todayDate) {
    this.id = trip["id"] || Date.now()
    this.userID = trip["userID"]
    this.destination = destinations.find(destination => {
      return destination.id === trip["destinationID"]
    }) || trip["destinationID"]
    this.travelers = trip["travelers"]
    this.date = trip["date"]
    this.endDate = ''
    this.duration = trip["duration"]
    this.status = trip["status"] || "pending"
    this.suggestedActivities = trip["suggestedActivities"]
    this.isToday = this.checkIfToday(todayDate)
    this.checkWhen(todayDate)
  }

  checkIfToday(todayDate) {
    if (this.status != 'approved') {
      return false
    } 
    const splitDate = this.date.split('/')
    const dateRearrange = [splitDate[1], splitDate[2], splitDate[0]].join('/')
    const dateRangeFill = Array(this.duration).fill(dateRearrange)
    let dateRange = []
    dateRangeFill.forEach((d, i) => {
      let dateObject = new Date(d)
      if (i === 0) {
        dateRange.push(dateObject)
      } else {
        dateObject.setDate(dateObject.getDate() + i)
        dateRange.push(dateObject)
      }
    })
    const restructuredDates = dateRange.map(dateObject => {
      return dateObject.toLocaleDateString('en-ZA')
    })
    this.endDate = restructuredDates[restructuredDates.length-1]
    return restructuredDates.includes(todayDate) ? true : false
  }

  convertDateToNumber(date) {
    return parseInt(date.split('/').join(''))
  }

  checkWhen(todaysDate) {
    if (this.status != 'approved' || this.isToday) {
      this.isPast = false
      this.isUpcoming = false
    } 

    const dateNumber = this.convertDateToNumber(todaysDate)
    const startDateNumber = this.convertDateToNumber(this.date)
    const endDateNumber = this.convertDateToNumber(this.endDate)

    if (dateNumber > endDateNumber) {
      this.isPast = true
      this.isUpcoming = false
    } else if (dateNumber < startDateNumber) {
      this.isPast = false
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