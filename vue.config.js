module.exports = {
    publishPath: process.env.NODE_ENV === 'production'
        ? '/2019/'
        : '/'
}