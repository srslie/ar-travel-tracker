class Traveler {
  constructor(traveler) {
    this.id = traveler["id"];
    this.name = traveler["name"];
    this.travelerType = traveler["travelerType"]
    this.trips = []
    this.totalSpending = 0
  }

  takeTrips(trip) {
    this.trips.push(trip)
    this.totalSpending += trip.calculateCost()
  }
}

export default Traveler;
