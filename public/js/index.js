'use strict';

var api = (function() {
    var hostname = 'localhost';
    var port = '3001';

    function apiRequest(method, url, successCallback, data) {
        var req = $.ajax({
            type: method,
            dataType: 'json',
            url: `http://${hostname}:${port}${url}`,
            data: JSON.stringify(data),
            success: successCallback
        });
        return req;
    }

    function getResource(params, successCallback) {
        return apiRequest('GET', params, successCallback, {});
    }

    return {
        getResource: getResource
    };
}());

