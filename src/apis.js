// possible databases: 'travelers', 'travelers/${id}', 'trips', 'destinations'

export function getData(database, localArray) {
  return fetch(`http://localhost:3001/api/v1/${database}`)
  .then(response => response.json())
  // .then(dataObject => {
  //   dataObject[database].forEach(dataObject => {
  //     localArray.push(dataObject)
  //   })
  // })
  .catch(error => {
    console.log('FETCH GET ERROR', error)
    alert(`Sorry, there was an error loading the page!`)
  })
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
  return fetch(`http://localhost:3001/api/v1/${database}`, settings)
    .then(response => {
      const responseParsed = response.json()
      console.log('API RESPONSE POST', responseParsed)
      return responseParsed
    })
    .catch(error => {
      console.log('FETCH POST ERROR', error)
      alert(`Sorry, there was an error submitting your data!`)
    })
}

export function deleteTrip(tripId) {
  const settings = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`http://localhost:3001/api/v1/trips/${tripId}`, settings)
    .then(response => {
      const responseParsed = response.json()
      console.log('API RESPONSE DELETE', responseParsed)
      return responseParsed
    })
    .catch(error => {
      console.log('FETCH DELETE ERROR', error)
      alert(`Sorry, there is an error deleting this trip!`)
    })
}