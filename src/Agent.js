class Agent {
  constructor() {
    this.name = 'agent' 
  }

  calculateYearlyIncome(trips) {
    const approvedTrips = trips.filter(trip => trip.status === "approved")
    
    const approvedTripsTotal = trips.reduce((total, trip) => {
      const tripTotal = trip.calculateTotalCost()
      if (typeof tripTotal === 'number') {
        total += tripTotal
      }
      return total
    }, 0)
    const cutOfTripsTotal = Math.round(approvedTripsTotal * .1)
    return cutOfTripsTotal
  }

  approve(trip) {
    trip.status = 'approved'
  }

  reject(trip) {
    trip.status = 'rejected'
  }
}

export default Agent;