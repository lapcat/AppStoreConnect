// Copyright (c) 2022 Jeff Johnson. All rights reserved.
(function() {
'use strict';

const AppleID = ''; // Required Apple ID

let account = document.getElementById("account_name_text_field");
if (account !== null) {
    ASCLogin();
} else {
    const accountObserver = new MutationObserver(function (records) {
        account = document.getElementById("account_name_text_field");
        if (account !== null) {
            accountObserver.disconnect();
            ASCLogin();
        }
    });
    accountObserver.observe(document, {childList: true, subtree: true});
}

function ASCLogin() {
    if (account.value.length > 0)
        return;
    if (AppleID.length === 0) {
        window.alert("AppleID required!");
        return;
    }
    account.value = AppleID;
    account.dispatchEvent(new Event("input"));
    
    const button = document.getElementById("sign-in");
    if (button === null) {
        console.log("ASC missing sign-in button");
        return;
    }
    if (button.disabled) {
        const disabledObserver = new MutationObserver(function (records) {
            if (!button.disabled) {
                disabledObserver.disconnect();
                button.click();
                ASCFocusPassword();
            }
        });
        disabledObserver.observe(button, {attributes: true, attributeFilter: ["disabled"]});
    } else {
        button.click();
        ASCFocusPassword();
    }
}

function ASCFocusPassword() {
    // Only works in Chrome, not Safari
    const password = document.getElementById("password_text_field");
    if (password === null) {
        console.log("ASC missing password_text_field");
        return;
    }
    if (password.getAttribute("tabindex") === "-1") {
        const tabindexObserver = new MutationObserver(function (records) {
            if (password.getAttribute("tabindex") !== "-1") {
                tabindexObserver.disconnect();
                password.focus();
            }
        });
        tabindexObserver.observe(password, {attributes: true, attributeFilter: ["tabindex"]});
    } else {
        password.focus();
    }
}

})();
