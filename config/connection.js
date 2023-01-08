const { connect, connection } = require('mongoose');

connect('mongodb://localhost/social-network-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;
