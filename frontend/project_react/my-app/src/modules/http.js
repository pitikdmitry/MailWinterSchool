class Http {
    constructor() {
        this.BaseUrl = 'http://localhost:5000';
    }

    static GetCORS(address, callback) {
        let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

        let xhr = new XHR();
        xhr.open('GET', this.BaseUrl + address, true);
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
        let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

        let xhr = new XHR();
        xhr.open('POST', this.BaseUrl + address, true);
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
    //
    // static FetchPost(address, body) {
    //     const url = (this.BaseUrl || baseUrl) + address;
    //     const json_body = JSON.stringify(body);
    //     return fetch(url, {
    //         method: 'POST',
    //         mode: 'no-cors',
    //         credentials: 'include',
    //         body: JSON.stringify(body),
    //         headers: {
    //             'Content-Type': 'application/json; charset=utf-8'
    //         }
    //     })
    //         .then(function (response) {
    //             if (response.status >= 400) {
    //                 throw response;
    //             }
    //
    //             return response.json();
    //         });
    // }
}

export {Http};