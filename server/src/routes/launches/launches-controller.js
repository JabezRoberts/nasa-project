const { getAllLaunches, addNewLaunch } = require('../../models/launches-model');

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());// convert Map data type to JSON via Array.from() method
};

function httpAddNewLaunch(req, res) {
    const launch = req.body;

    launch.launchDate = new Date(launch.launchDate);

    addNewLaunch(launch);

    return res.status(201).json(launch);
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch
}