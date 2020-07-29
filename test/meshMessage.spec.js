const shortestRoute = require('../meshMessage.js')
const network = {
    'Min'     : ['William', 'Jayden', 'Omar'],
    'William' : ['Min', 'Noam'],
    'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
    'Ren'     : ['Jayden', 'Omar'],
    'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
    'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
    'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
    'Noam'    : ['Nathan', 'Jayden', 'William'],
    'Omar'    : ['Ren', 'Min', 'Scott']
}

describe('#shortestRoute', () => {
    it('should return shortest array given Jayden is the sender and Adam is the recipient', () => {
        const sender = 'Jayden'
        const recipient = 'Adam'
        expect(shortestRoute(network, sender, recipient)).toEqual(['Jayden','Amelia','Adam'])
    })
    it('should return array of length 3 given Jayden is the sender and Adam is the recipient', () => {
        const sender = 'Jayden'
        const recipient = 'Adam'
        expect(shortestRoute(network, sender, recipient).length).toEqual(3)
    })
    it('should return shortest array given Jayden is the sender and Adam is the recipient', () => {
        const sender = 'William'
        const recipient = 'Ren'
        expect(shortestRoute(network, sender, recipient)).toEqual(['William','Min','Jayden','Ren'] || ['William','Min','Omar','Ren'] || ['William','Noam','Jayden','Ren'])
    })
    it('should return array of length 4 given William is the sender and Ren is the recipient', () => {
        const sender = 'William'
        const recipient = 'Ren'
        expect(shortestRoute(network, sender, recipient).length).toEqual(4)
    })
})