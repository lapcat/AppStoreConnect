# Login for App Store Connect

Login for App Store Connect is a web browser extension that skips the two-step login for [App Store Connect](https://appstoreconnect.apple.com/login/). It automatically fills the Apple ID field and displays the password field.

## Usage

You must enter your Apple ID (typically an email) at the top of the [content script](content.js) file:
```
const AppleID = ''; // Required Apple ID
```

## Compatibility

Login for App Store Connect is compatible with Safari and Google Chrome. You can load it as an unpacked extension in Chrome. In Safari, it requires a native app wrapper, which you can create from a template in Xcode (see below).

### Safari wrapper

Creating a native wrapper for Safari is mostly an automated process:

1. After adding your Apple ID in [content.js](content.js), execute the following Terminal command to run the [safari-web-extension-converter](https://developer.apple.com/documentation/safariservices/safari_web_extensions/converting_a_web_extension_for_safari/):
```
xcrun safari-web-extension-converter /Path/To/Extension/Folder
```

2. Ignore the complaint about the missing icon.

3. The Xcode project will open automatically; edit the signing profile for all 4 targets.

4. Try building the project; likely Xcode will have errors for a missing file with the same name of the project. You can remove that file reference from the Copy phase of both extension targets.

5. Build and run; enable the Safari extension, allow access to the `idmsa.apple.com` website and test.

6. Archive and copy the wrapper app into your Applications folder and enable the extension in Safari.

## Author

[Jeff Johnson](https://lapcatsoftware.com/)

To support the author, you can [PayPal.Me](https://www.paypal.me/JeffJohnsonWI) or buy the browser extension [StopTheMadness](https://underpassapp.com/StopTheMadness/).

## Copyright

Login for App Store Connect is Copyright © 2022 Jeff Johnson. All rights reserved.

## License

See the [LICENSE.txt](LICENSE.txt) file for details.
