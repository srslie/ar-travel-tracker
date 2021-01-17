import trips from "../test/trips-test-data";

class Traveler {
  constructor(traveler, trips) {
    this.id = traveler["id"];
    this.name = traveler["name"];
    this.travelerType = traveler["travelerType"]
    this.trips = this.getTrips(trips)
    this.totalTripSpending = this.calculateTotalTripSpending()
  }

  getTrips(trips) {
    const userTrips = trips.filter(trip => trip.userID === this.id)
    return userTrips.length ? userTrips : []
  }

  calculateTotalTripSpending() {
    if (!this.trips.length) {
      return 0
    }
    const approvedTripsThisYear = this.trips.filter(trip => {
      return trip.status === 'approved'
      && trip.date.split('/')[0] === trip.today.split('/')[0]
    })

    // console.log('allUserTrips', this.trips, 'approvedTrips', approvedTripsThisYear)
    const totalCostOfAllApprovedTrips = 
      approvedTripsThisYear.reduce((total, trip) => {
        total += trip.calculateTotalCost() 
        return total
      }, 0)
    return totalCostOfAllApprovedTrips
  }

}

export default Traveler;