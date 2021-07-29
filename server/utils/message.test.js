const expect = require('expect')

var { generateMessage } = require('./message')

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