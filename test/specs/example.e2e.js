const axios = require('axios');
const postHelp = require('../pageobjects/postAPI.page');

describe('API Requests', () => {
it('POST Request', async() => {
    const postReq = await postHelp.postRequest();
    });
});


