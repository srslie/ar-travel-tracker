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
    let tripsHTML = `${this.addTripLabel(area)}`
    if (!tripsList.length) {
      tripsHTML += `No trips to display, better book a trip!`
    } else {
      tripsHTML += tripsList.map(trip => this.createCardHtml(trip)).join('')
    } 
    this.addDisplay( area, 'beforeend', tripsHTML)
  }, 

  createCardHtml(trip) {
    const suggestedActivities = trip.suggestedActivities.length 
      ? `<h3>Suggested Activites:</h3> 
            <p>${trip.suggestedActivities}</p>`
      : ''
     return `
        <article class="trip-card ${trip.status}" id="${trip.id}">
          <h2>Trip to: ${trip.destination.destination}</h2>
          <img class="trip-pic" src=${trip.destination.image} alt=${trip.destination.image}>
          <h3>Status:</h3>
            <p>${trip.status}</p>
          <h3>Start Date:</h3>
            <p>${trip.date}</p>
          <h3>Length of Stay:</h3>
            <p>${trip.duration} days</p>
          <h3>Number of Travelers:</h3>
            <p>${trip.travelers}</p>
          ${suggestedActivities}
        </article>
        `
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

  // displayTotalTripSpending(user) {
  //   this.clearDisplay('.investment')
  //   let moneyHTML = '<h2>Yearly Travel Investment</h2>'
  //   if (user.totalTripSpending) {
  //     moneyHTML += `<p>$${user.calculateTotalTripSpending()}</p>`
  //   } else {
  //     moneyHTML = 'Experiences are investments: book a trip!'
  //   }
  //   this.addDisplay( '.investment', 'beforeend', moneyHTML)
  // },

  displayTotalMoney(user, incomeOrInvestment) {
    this.clearDisplay('.income')

    let calculation = user.isAgent 
      ? user.calculateYearlyIncome()
      : user.calculateTotalTripSpending()

    let emptyPhrase = user.isAgent
      ? 'Work hard, play hard: book some trips!'
      : 'Experiences are investments: book a trip!'

    let moneyHTML = '<h2>Yearly Travel Income</h2>'
    if (user.totalTripSpending) {
      moneyHTML += `<p>$${calculation}</p>`
    } else {
      moneyHTML += `${emptyPhrase}`
    }
    this.addDisplay( '.income', 'beforeend', moneyHTML)
  },

  displaySearchResults(userResults) {
    this.clearDisplay('.user-search-results')
    let searchResultsHTML = `<h2>Search Results</h2>`
    if (userResults.length) {
      searchResultsHTML += 'Sorry, no clients found with that name...'
    } else {
      searchResultsHTML += userResults.forEach(client=> {
        return `
        <div class="search-result-card>
          <h2>Client Name:</h2>
            <p>${client.name}</p>
          <button class="client-trips-button">All Client Trips</button>
        <div>
        `
      })
    }
    this.addDisplay('.user-search-results', 'beforeend', searchResultsHTML.join(''))
  },

  displayClientTripsForAgent(client) {
    this.clearDisplay('.client-trips')
    this.toggle(['.user-search-results', '.client-trips'])
    let clientTripsHTML = '<div class="client-trips-card"><h2>Client Trips</h2>'
    if (!client.trips.length) {
      clientTripsHTML += `No trips to display, better book some trips!`
    } else {
      clientTripsHTML += client.trips.forEach(trip => {
        return this.createCardHtml(trip) + 
        `
          <div class="agent-trip-interaction"
            <button class="approve-button agent-interaction" aria-label="approve tripbutton">
            Approve Booking
            </button>
            <button class="reject-button agent-interaction" aria-label="reject tripbutton">
            Reject Booking
            </button>
            <button class="delete-trip-button agent-interaction" aria-label="deletetrip button">
            Delete Trip
            </button>
            <button class="back-to-search-results" aria-label="back to seach resultsbutton">
            Back to Search Results
            </button>
          </div>
        </div>
        `
      })
    }
    this.addDisplay( '.client-trips', 'beforeend', clientTripsHTML.join(''))
  }
}

export default domUpdates;