class Http {
    constructor() {

    }


    static GetCORS(address, callback) {
        let BaseUrl = 'http://localhost:5000';

        let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

        let xhr = new XHR();
        xhr.open('GET', BaseUrl + address, true);
        // xhr.withCredentials = true;
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf8');

        xhr.onload = function() {

            let response = null;
            try {
                debugger;
                response = JSON.parse(xhr.responseText);
            } catch (err) {

            }
            callback(null, response);
        };

        xhr.onerror = function() {
            return callback(xhr, null);
        };

        xhr.send();
    }

    static PostCORS(address, body, callback) {
        let BaseUrl = 'http://localhost:5000';
        let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
        debugger;
        console.log(BaseUrl + address);
        let xhr = new XHR();
        xhr.open('POST', BaseUrl + address, true);
        // xhr.withCredentials = true;
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf8');

        xhr.onload = function() {

            let response = null;
            try {
                response = JSON.parse(xhr.responseText);
            } catch (err) {

            }

            callback(null, response);
        };

        xhr.onerror = function() {
            return callback(xhr, null);
        };

        xhr.send(JSON.stringify(body));
    }

    static FetchGet(address) {
        let BaseUrl = 'http://localhost:5000';
        const url = BaseUrl + address;
        return fetch(url, {
            method: 'GET',
            // mode: 'cors',
            // credentials: 'include'
        })
            .then(function (response) {
                if (response.status >= 400) {
                    throw response;
                }

                return response.json();
            });
    }
    static FetchPost(address, body) {
        debugger;
        let BaseUrl = 'http://localhost:5000';
        const url = BaseUrl + address;
        return fetch(url, {
            method: 'POST',
            // mode: 'cors',
            // credentials: 'include',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
            .then(function (response) {
                debugger;
                if (response.status >= 400) {
                    throw response;
                }

                return response.json();
            });
    }
}

export {Http};