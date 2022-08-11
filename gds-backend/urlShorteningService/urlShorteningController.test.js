let urlShorteningController = require('./urlShorteningController');

describe('Unit test for shortUrlToId', () => {
    it ('Valid Url', () => {
        const testUrl = 'https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples';
        expect(urlShorteningController.shortURLtoID(testUrl)).toBe('vzszmayBA');
    });

    it ('Invalid Url', () => {
        const testUrl = '';
        expect(urlShorteningController.shortURLtoID(testUrl)).toBe('');
    });
})