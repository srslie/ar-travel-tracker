const domUpdates = {
  toggle(anyArr) {
    anyArr.forEach(area =>
      document.querySelector(area).classList.toggle("hidden"))
  },

  addDisplay(area, where, what) {
    document.querySelector(area).insertAdjacentHTML(where, what)
  },

  clearDisplay(area) {
    document.querySelector(area).innerHTML = ''
  },

  displayWelcomeBanner(user) {
    const firstName = user.name.split(' ')[0]
    const welcomeHTML = `<h2>Welcome ${firstName}!</h2>`
    this.addDisplay('h2', 'beforeend', welcomeHTML)
  },

  displayTrips(tripsList, area) {
    this.clearDisplay(area)
    let tripsHTML = ''
    if (!tripsList.length) {
      tripsHTML = `No trips to display, better book a trip!`
    } else {
      tripsHTML = tripsList.map(trip => {
        const suggestedActivities = trip.suggestedActivities.length 
        ? `<h3>Suggested Activites: ${trip.suggestedActivities}</h3>` 
        : ''
        return `
        <article class="trip-card ${trip.status}">
          <h2>Trip to ${trip.destination.destination}</h2>
          <h3>Status: ${trip.status}</h3>
          <h3>Start Date: ${trip.date}</h3>
          <h3>Length of Stay: ${trip.duration}</h3>
          <h3>Number of Travelers: ${trip.travelers}</h3>
          ${suggestedActivities}
        `
      }).join('')
    } 
    this.addDisplay( area, 'beforeend', tripsHTML)
  }, 

  displayTotalTripSpending(user) {
    this.clearDisplay('.year-cost')
    let moneyHTML = '<h2>Yearly Travel Investment</h2>'
    if (user.totalTripSpending) {
      moneyHTML += `<h3>$${user.calculateTotalTripSpending()}`
    } else {
      moneyHTML = 'Experiences are investments: book a trip!'
    }
    this.addDisplay( '.year-cost', 'beforeend', moneyHTML)
  }

}

export default domUpdates;