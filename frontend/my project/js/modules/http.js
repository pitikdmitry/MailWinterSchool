(function () {
    'use strict';
    const baseUrl = `${window.location.protocol}//${window.location.host}`;

    /**
     * Модуль, предоставляющий методы для выполнения HTTP-запросов
     * @module Http
     */
    class Http {
        /**
         * Выполняет GET-запрос по указанному адресу
         * @param {string} address - адрес запроса
         * @param {Function} callback - функция-коллбек
         */
        static Get(address, callback) {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', address, true);
            xhr.withCredentials = true;

            xhr.onreadystatechange = function () {
                if (xhr.readyState !== 4) return;
                if (+xhr.status >= 400) {
                    return callback(xhr, null);
                }

                const response = JSON.parse(xhr.responseText);
                callback(null, response);
            };

            xhr.send();
        }

        /**
         * Выполняет POST-запрос по указанному адресу
         * @param {string} address - адрес запроса
         * @param {*} body - тело запроса (объект)
         * @param {Function} callback - функция-коллбек
         */
        // static Post(address, body, callback) {
        //     const xhr = new XMLHttpRequest();
        //     xhr.open('POST', Http.BaseUrl + address, true);
        //     xhr.withCredentials = true;
        //     xhr.setRequestHeader('Content-Type', 'application/json; charset=utf8');
        //
        //     xhr.onreadystatechange = function () {
        //         if (xhr.readyState !== 4) return;
        //         if (+xhr.status >= 400) {
        //             return callback(xhr, null);
        //         }
        //
        //         const response = JSON.parse(xhr.responseText);
        //         callback(null, response);
        //     };
        //     debugger;
        //     xhr.send(JSON.stringify(body));
        // }
        static GetCORS(address, callback) {
            let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

            let xhr = new XHR();
            xhr.open('GET', Http.BaseUrl + address, true);
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
                // alert( this.responseText );
            };

            xhr.onerror = function() {
                return callback(xhr, null);
                // alert( 'Ошибка ' + this.status );
            };

            xhr.send();
        }

        static PostCORS(address, body, callback) {
            let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

            let xhr = new XHR();
            xhr.open('POST', Http.BaseUrl + address, true);
            // xhr.withCredentials = true;
            xhr.setRequestHeader('Content-Type', 'application/json; charset=utf8');

            xhr.onload = function() {

                let response = null;
                try {
                    response = JSON.parse(xhr.responseText);
                } catch (err) {

                }


                callback(null, response);
                // alert( this.responseText );
            };

            xhr.onerror = function() {
                return callback(xhr, null);
                // alert( 'Ошибка ' + this.status );
            };

            xhr.send(JSON.stringify(body));
        }
        //
        // static FetchPost(address, body) {
        //     const url = (Http.BaseUrl || baseUrl) + address;
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
    Http.BaseUrl = 'http://localhost:5000';
    window.Http = Http;

})();
