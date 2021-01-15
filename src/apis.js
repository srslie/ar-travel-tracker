// possible databases: 'travelers', 'travelers/${id}', 'trips', 'destinations'

export function getData(database, localArray) {
  fetch(`http://localhost:3001/api/v1/${database}`)
  .then(response => response.json())
  .then(dataObject => {
    const dataKey = Object.keys(dataObject)
    dataObject[dataKey[0]].forEach(dataObject => {
      localArray.push(dataObject)
    })
  })
  .catch(error => alert(`Sorry, there is an error: ${error}`))
}

// post to 'trips'
//{id: <number>, userID: <number>, destinationID: <number>, travelers: <number>, date: <string 'YYYY/MM/DD'>, duration: <number>, status: <string 'approved' or 'pending'>, suggestedActivities: <array of strings>}

// post to 'destinations'
//{id: <number>, destination: <string>, estimatedLodgingCostPerDay: <number>, estimatedFlightCostPerPerson: <number>, image: <string>, alt: <string>}

//post to 'updateTrip'
//{id: <number>, destination: <string>, estimatedLodgingCostPerDay: <number>, estimatedFlightCostPerPerson: <number>, image: <string>, alt: <string>}

export function postData(database, bodyPost) {
  const settings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyPost)
  }
  fetch(`http://localhost:3001/api/v1/${database}`, settings)
  .then(response => response.json())
  .catch(error => alert(`Sorry, there is an error: ${error}`))
}

export function deleteTrip(tripId) {
  const settings = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  fetch(`http://localhost:3001/api/v1/trips/${tripId}`, settings)
  .catch(error => alert(`Sorry, there is an error: ${error}`))
}