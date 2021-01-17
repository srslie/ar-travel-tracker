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
    const approvedTrips = this.trips.filter(trip => trip.status === 'approved')
    const totalCostOfAllApprovedTrips = approvedTrips.reduce((total, trip) => {
      total += trip.calculateTotalCost() 
      return total
    }, 0)
    return totalCostOfAllApprovedTrips
  }
}

export default Traveler;