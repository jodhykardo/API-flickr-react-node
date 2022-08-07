// const User = require('../models/User');
const axios = require('axios');

const read = async (req, res) => {
    if (!req.headers.apikey) {
        return res.status(401).json({ Message: "Unauthorized!" });
    }

    if (req.headers.apikey !== process.env.API_KEY) {
        return res.status(401).json({ Message: "Unauthorized!" });
    }

    if (req.query.tag) {
        try {
            var flickrData = await axios.get(process.env.API_URL + "?format=json&nojsoncallback=1&tags=" + req.query.tag);
        } catch (error) {
            console.log(error);
        }
    } else {
        try {
            var flickrData = await axios.get(process.env.API_URL + "?format=json&nojsoncallback=1");
        } catch (error) {
            console.log(error);
        }
    }

    res.json(flickrData.data);
}

const author = async (req, res) => {
    if (!req.headers.apikey) {
        return res.status(401).json({ Message: "Unauthorized!" });
    }

    if (req.headers.apikey !== process.env.API_KEY) {
        return res.status(401).json({ Message: "Unauthorized!" });
    }
    const id = req.params.id;


    try {
        var flickrData = await axios.get(process.env.API_URL + "?format=json&nojsoncallback=1&id="+id);
    } catch (error) {
        console.log(error);
    }

    res.json(flickrData.data);
}

module.exports = { read, author };