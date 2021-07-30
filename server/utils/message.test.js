const expect = require('expect')

var { generateMessage, generateLocationMessage } = require('./message')

describe('generateMessage', () => {
    //store response in variable
    //assert `from` match
    //asert `text` match
    //assert `createdAt` is number
    it('should generate correct message object', () => {
        const from = 'Jen';
        const text = 'some message';
        const message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text})
    })
})

describe('generationLocationMessage', () => {
    it('should generate correct location object', () => {
        const from = 'Tony';
        const longitude = 40;
        const latitude = 12;
        const url = `https://www.google.com/maps?q=${latitude},${longitude}`
        const message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});
    
    })
})