const API_URL = 'http://localhost:8000/';


async function httpGetPlanets() {

  // TODO: Once API is ready.
  // Load planets and return as JSON.

  //const response = await fetch('http://localhost:8000/planets'); //client is on PORT 3000 but backend is on PORT 8000 so we need to specify that when we make our request
  //all our http functions/request are going to be made against our single api so we move it into API_URL variable and rewrite above code as:
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.

  const response = await fetch(`${API_URL}/launchees`);
  const fetchedLaunches = await response.json();

  //launches will be returned in ascending order
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};