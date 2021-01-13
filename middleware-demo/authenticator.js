function authenitcate(req, res, next) {
    console.log('Authenticating...');
    next();
}

module.exports = authenitcate;