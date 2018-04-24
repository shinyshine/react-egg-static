const axios = require('axios');

module.exports = async function get(url, params) {

    return await axios.get(url, { params })
}