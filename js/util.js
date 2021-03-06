'use strict';

if (typeof window == 'undefined' || !(window.openpgp)) {
    throw new ReferenceError("Openpgp is not avilable.")
}
const keyring = new openpgp.Keyring();

function gpg_sign(key, message) {
    options = {
        data: message,
        privateKeys: [key],
        detached: true
    };
    openpgp.sign(options).then(function (signed) {
        // var cleartext = signed.data;
        // console.log(cleartext)
        // TODO return Promise
        console.log(signed.signature)
    });
}

function curl(url, settings, next, error) {
    fetch(url, settings).then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Could not reach the API: " + response.statusText);
        }
    }).then(function (data) {
        next(data);
    }).catch(function (e) {
        error(e.message);
    });

}