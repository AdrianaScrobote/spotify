import * as server from '../src'
jest.mock('../src/router', () => jest.fn());
jest.mock('../src/error-handler', () => jest.fn());
jest.mock('swagger-ui-express', () => ({
    serve: jest.fn(),
    setup: () => jest.fn(),
}));

jest.mock('express', () => {
    const expressMock = () => ({
        use: jest.fn(),
        listen: jest.fn((port, listener) => listener()),
        locals: {}
      });

    return expressMock
})

describe('Test server aplication', () => {

    it('test start server', async () => {
        const port = 3333
        const result = await server.start(port)
        expect(result).toBeUndefined()
    })
})