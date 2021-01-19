import trips from "../test/trips-test-data";

class Traveler {
  constructor(traveler, trips) {
    this.id = traveler.id
    this.name = traveler.name
    this.travelerType = traveler.travelerType
    this.trips = this.getTrips(trips)
  }

  getTrips(trips) {
    const userTrips = trips.filter(trip => trip.userID === this.id)
    return userTrips.length ? userTrips : []
  }

  convertDateToNumber(date) {
    return date ? parseInt(date.split('/').join('')) : 0
  }

  getTripsTimeline(today) {
    let tripTimeline = {
      currentTrips: [],
      pastTrips: [],
      upcomingTrips: []
    }

    const approvedTrips = this.trips.filter(trip => trip.status === 'approved')
    approvedTrips.forEach(trip => {
      const todayDateNumber = this.convertDateToNumber(today)
      const startDateNumber = this.convertDateToNumber(trip.date)
      const endDateNumber = this.convertDateToNumber(trip.endDate)

      if (todayDateNumber >= startDateNumber 
        && todayDateNumber <= endDateNumber) {
        tripTimeline.currentTrips.push(trip)
      } else if (todayDateNumber > endDateNumber) {
        tripTimeline.pastTrips.push(trip)
      } else {
        tripTimeline.upcomingTrips.push(trip)
      }
    })

    return tripTimeline
  }

  calculateTotalTripSpending(today) {
    if (!this.trips.length) {
      return 0
    }
    const approvedTripsThisYear = this.trips.filter(trip => {
      return trip.status === 'approved'
      && trip.date.split('/')[0] === today.split('/')[0]
    })

    const totalCostOfAllApprovedTrips = 
      approvedTripsThisYear.reduce((total, trip) => {
        total += trip.calculateTotalCost() 
        return total
      }, 0)
    return totalCostOfAllApprovedTrips
  }

}

export default Traveler;