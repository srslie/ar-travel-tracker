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
          <h2>Trip to: ${trip.destination.destination}</h2>
          <h3>Status:</h3>
           <p>${trip.status}</p>
          <h3>Start Date:</h3>
           <p>${trip.date}</p>
          <h3>Length of Stay:</h3>
           <p>${trip.duration}</p>
          <h3>Number of Travelers:</h3>
           <p>${trip.travelers}</p>
          ${suggestedActivities}
        `
      }).join('')
    } 
    this.addDisplay( area, 'beforeend', this.addTripLabel(area)+tripsHTML)
  }, 

  addTripLabel(area) {
    switch(area) {
      case ('.present'):
        return '<h2>Present Trips</h2>'
        break;
      case ('.upcoming'):
        return '<h2>Upcoming Trips</h2>'
        break;
      case ('.pending'):
        return '<h2>Pending Trips</h2>'
        break;
      case ('.approved'):
        return '<h2>Approved Trips</h2>'
        break;
      case ('.rejected'):
        return '<h2>Rejected Trips</h2>'
        break;
      case ('.past'):
        return '<h2>Past Trips</h2>'
        break;
    }
  },

  displayTotalTripSpending(user) {
    this.clearDisplay('.year-cost')
    let moneyHTML = '<h2>Yearly Travel Investment</h2>'
    if (user.totalTripSpending) {
      moneyHTML += `<p>$${user.calculateTotalTripSpending()}</p>`
    } else {
      moneyHTML = 'Experiences are investments: book a trip!'
    }
    this.addDisplay( '.year-cost', 'beforeend', moneyHTML)
  }

}

export default domUpdates;