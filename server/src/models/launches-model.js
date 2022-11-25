const launches = new Map(); // Use Javascript map data type

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepker Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 20230'),
    destination: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};


// add launches to our launches map by using key:value pairs below. Will map flight number to launches
launches.set(launch.flightNumber, launch);


function getAllLaunches() {
    return Array.from(launches.values());
}


function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(
        latestFlightNumber, 
        Object.assign(launch, {
            upcoming: true,
            success: true,
            customers: ['Zero To Mastery', 'NASA'],
            flightNumber: latestFlightNumber,
    }));
}

module.exports = {
    getAllLaunches,
    addNewLaunch
};