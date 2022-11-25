const { getAllLaunches, addNewLaunch, existsLaunchWithId, abortLaunchById } = require('../../models/launches-model');

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());// convert Map data type to JSON via Array.from() method
};

function httpAddNewLaunch(req, res) {
    const launch = req.body;

    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(400).json({
            error: 'Missin required launch property'
        });
    }

    launch.launchDate = new Date(launch.launchDate);
    if (launch.launchDate.toString() === 'Invalid Date') { // or if (isNaN(launch.launchDate)
        return res.status(400).json({
            error: 'Invalid launch date'
        });
    }

    addNewLaunch(launch);

    return res.status(201).json(launch);
}


function httpAbortLaunch(req, res) {
    const launchId = +req.params.id; // +req.params.id  or Number(req.params.id) both convert req.params.id to number. returned as string

    // if launch does not exist
    if (!existsLaunchWithId(launchId)) {
        return res.status(404).json({
            error: "Launch not found",
        });
    }

    //if launch does exist
    const aborted = abortLaunchById(launchId);
    return res.status(200).json(aborted);

};

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch
}