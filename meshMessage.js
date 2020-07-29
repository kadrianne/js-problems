// takes in an object where keys are usernames and values are arrays of users nearby
// return shortest array where sender is first value and recipient is last value

module.exports = function shortestRoute(network, sender, recipient){
// check for common users near sender and recipient
    // if none, check first user near sender and compare to recipient's users

    let commonUser = ''

    network[sender].forEach(user => {
        let foundUser = network[recipient].find(person => person == user)
        foundUser && (commonUser = foundUser)
    })

    if (commonUser !== '') {
        return [sender, commonUser, recipient]
    } else {

    }
}