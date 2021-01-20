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
    this.clearDisplay('h2')
    const firstName = user.name.split(' ')[0]
    const welcomeHTML = `Welcome ${firstName}!`
    this.addDisplay('h2', 'afterbegin', welcomeHTML)
  },

 createBookingsSelection(destinations) {
    let selectionHTML = ''
    destinations.forEach(destination => {
      selectionHTML += `<option value="${destination.name}">
      ${destination.name}</option>`
    });
    this.addDisplay('select', 'beforeend', selectionHTML)
  },

  displayTrips(tripsList, area) {
    this.clearDisplay(area)
    let tripsHTML = ''
    if (!tripsList.length) {
      tripsHTML += `<div class="no-trips">
      ${this.addTripLabel(area)} 
      <p>No trips to display, better book a trip!</p></div>`
    } else {
      tripsHTML = `${this.addTripLabel(area)}`
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
        <article class="trip-card ${trip.status}" 
        id="${trip.id}" 
        style="background-image: url(${trip.destination.image});"
        alt="${trip.destination.alt}">
          <div class="trip-title">
            <h2>Trip to ${trip.destination.name}</h2>
          </div>
          <div class="card-info">
            <h3>Status:</h3>
              <p>${trip.status}</p>
            <h3>Start Date:</h3>
              <p>${trip.date}</p>
            <h3>Length of Stay:</h3>
              <p>${trip.duration} days</p>
            <h3>Number of Travelers:</h3>
              <p>${trip.travelers}</p>
            ${suggestedActivities}
          </div>
        </article>
        `
  },

  addTripLabel(area) {
    switch (area) {
    case ('.present'):
      return '<h2 class="trips-label">Present Trips</h2>'
    case ('.upcoming'):
      return '<h2 class="trips-label">Upcoming Trips</h2>'
    case ('.pending-trips'):
      return '<h2 class="trips-label">Pending Trips</h2>'
    case ('.approved'):
      return '<h2 class="trips-label">Approved Trips</h2>'
    case ('.rejected'):
      return '<h2 class="trips-label">Rejected Trips</h2>'
    case ('.past'):
      return '<h2 class="trips-label">Past Trips</h2>' 
    case ('.today-travels'):
      return '<h2 class="trips-label">Traveling Today</h2>'
    case ('.pending-for-agent'):
      return '<h2 class="trips-label">Pending Review</h2>'
    }
  },

  confirmTripBookingSubmission(newTrip) {
    this.clearDisplay('.booking-confirmation')
    let confirmationHtml = `<h2 class="new-trip-title">
    Confirmation of New Trip Pending</h2>`
    confirmationHtml += this.createCardHtml(newTrip)
    this.addDisplay('.booking-confirmation', 'beforeend', confirmationHtml)
    this.toggle([
      '.booking-area', 
      '.booking-confirmation'
    ])
  },

  confirmNewDestination(newDestination) {
    this.clearDisplay('.confirmation')

    let confirmationHTML = `<p>Successfully added new destination of 
    </p><h2>${newDestination.name}</h2><p> with estimated lodging cost of 
    </p><h2>$${newDestination.estimatedLodgingCostPerDay} per day</h2><p> 
    with estimated flight cost of 
    </p><h2>$${newDestination.estimatedFlightCostPerPerson} per person round trip</h2><p>
    to the selection of possible places for your clients to travel!</p>
    <img class="new-destination-image" src="${newDestination.image}" alt="${newDestination.alt}">
    `

    this.addDisplay('.confirmation', 'beforeend', confirmationHTML)
  },

  displayTotalTripSpending(user, today) {
    this.clearDisplay('.investment')
    let moneyHTML = '<h2>Yearly Travel Investment</h2>'
    const tripTotal = user.calculateTotalTripSpending(today)
    if (tripTotal) {
      moneyHTML += `<p>$${tripTotal}</p>`
    } else {
      moneyHTML = 'Experiences are investments: book a trip!'
    }
    this.addDisplay( '.investment', 'beforeend', moneyHTML)
  },

  displayTotalIncome(user, trips) {
    this.clearDisplay('.income')
    let moneyHTML = '<h2>Total Yearly Earnings</h2>'
    const incomeTotal = user.calculateYearlyIncome(trips)
    if (incomeTotal) {
      moneyHTML += `<p>$${incomeTotal}</p>`
    } else {
      moneyHTML += 'Work hard, play hard: book some trips!'
    }
    this.addDisplay( '.income', 'beforeend', moneyHTML)
  },

  displaySearchResults(userResults) {
    this.clearDisplay('.user-search-results')
    let searchResultsHTML = `<h2>Search Results</h2>`
    if (userResults.length) {
      userResults.forEach(client => {
      searchResultsHTML +=  `
        <div class="search-result-card ${client.id}">
          <h2>Client Name:</h2>
            <p>${client.name}</p>
          <button class="client-trips-button">All Client Trips</button>
        <div>
        `
      })
       console.log('INEACH', searchResultsHTML)
    } else {
       searchResultsHTML += 'Sorry, no clients found with that name...'
    }
    console.log('BEFORERETURN', searchResultsHTML)
    this.addDisplay('.user-search-results', 'beforeend', searchResultsHTML)
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
            <button class="approve-button agent-interaction" 
            aria-label="approve tripbutton">
            Approve Booking
            </button>
            <button class="reject-button agent-interaction" 
            aria-label="reject tripbutton">
            Reject Booking
            </button>
            <button class="delete-trip-button agent-interaction" 
            aria-label="deletetrip button">
            Delete Trip
            </button>
            <button class="back-to-search-results" 
            aria-label="back to seach resultsbutton">
            Back to Search Results
            </button>
          </div>
        </div>
        `
      })
    }
    this.addDisplay('.client-trips', 'beforeend', clientTripsHTML)
  },

  displayAgentConfirmation(trip, confirmingWhat) {
    this.clearDisplay('.confirmation')
    this.toggle(['.confirmation', ])

    const clientName = travelers.find(user => user.id === trips.userID).name
    let confirmationHtml = `
    <h2>Update Confirmed!</h2>
      <p>Trip id #${trip.id} to 
      ${trip.name} for 
      ${clientName} has been 
      ${confirmingWhat}!</p>
    `
    this.addDisplay('.confirmation', 'beforeend', confirmationHtml)
  },

  displayTodayTrips(travelers, today) {
    const todayTrips = travelers.reduce((todayTrips, client) => {
      client.getTripsTimeline(today).currentTrips.forEach(trip => todayTrips.push(trip))
      return todayTrips
    }, [])

    this.displayTrips(todayTrips, '.today-travels')
  },

  displayPendingTrips(trips) {
    const pendingTrips = trips.filter(trip => trip.status === 'pending')

    this.displayTrips(pendingTrips, '.pending-for-agent')
  }
}

export default domUpdates;