const axios = require('axios');
class postAPI {

    async configAxios() {
        return axios.create({
            baseURL: 'https://mailsac.com/api/',
            headers: {
                'Host': 'mailsac.com',
                'Mailsac-Key': 'k_oVJYElXKNJFJpdSsJmUGZYmUo7Ml0wshQQf2b2'
            }
        });
    }

    async postRequest() {
        const client = await this.configAxios();
        return client.post('validations/addresses', {
            emails: [
                'anything-123@mailsac.com',
                'anything-456@example.com'
            ]
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (response) {
            console.log(error)
        })
    }

}

module.exports = new postAPI()