class Traveler {
  constructor(traveler, trips) {
    this.id = traveler["id"];
    this.name = traveler["name"];
    this.travelerType = traveler["travelerType"]
    this.trips = trips.filter(trip => trip.userID === this.id) || []
    this.totalTripSpending = this.trips.length ? this.calculateTotalTripSpending() : 0
  }

  calculateTotalTripSpending() {
    const approvedTrips = this.trips.filter(trip => trip.status === 'approved')
    const totalCostOfAllApprovedTrips = approvedTrips.reduce((total, trip) => {
      total += trip.calculateTotalCost() 
      return total
    }, 0)
    return totalCostOfAllApprovedTrips
  }
}

export default Traveler;