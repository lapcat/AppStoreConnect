# Login for App Store Connect

Login for App Store Connect is a web browser extension that skips the two-step login for [App Store Connect](https://appstoreconnect.apple.com/login/). It automatically fills the Apple ID field and displays the password field.

## Usage

You must enter your Apple ID (typically an email) at the top of the [content script](content.js) file:
```
const AppleID = ''; // Required Apple ID
```

## Compatibility

Login for App Store Connect is compatible with Safari and Google Chrome. You can load it as an unpacked extension in Chrome. In Safari, it requires a native app wrapper, which you can create from a template in Xcode.

## Author

[Jeff Johnson](https://lapcatsoftware.com/)

To support the author, you can [PayPal.Me](https://www.paypal.me/JeffJohnsonWI) or buy the browser extension [StopTheMadness](https://underpassapp.com/StopTheMadness/).

## Copyright

Login for App Store Connect is Copyright © 2022 Jeff Johnson. All rights reserved.

## License

See the [LICENSE.txt](LICENSE.txt) file for details.
