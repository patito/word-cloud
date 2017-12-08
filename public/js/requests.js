'use strict';

var requests = (function() {
    var hostname = 'localhost';
    var port = '3001';

    function apiRequest(method, url, successCallback, data) {
        return $.ajax({
            type: method,
            dataType: 'json',
            url: `http://${hostname}:${port}${url}`,
            data: JSON.stringify(data),
            success: successCallback
        });
    }

    function get(params, successCallback) {
        return apiRequest('GET', params, successCallback, {});
    }

    return {
        get: get
    };
}());