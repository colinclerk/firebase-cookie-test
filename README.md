This function is deployed here:
[https://us-central1-testing-3ab8e.cloudfunctions.net/helloWorld](https://us-central1-testing-3ab8e.cloudfunctions.net/helloWorld)

You can also test this in curl:

`curl -H "Cookie: random=value" https://us-central1-testing-3ab8e.cloudfunctions.net/helloWorld`

`curl -H "Cookie: foo=bar" -X POST https://us-central1-testing-3ab8e.cloudfunctions.net/helloWorld`

In the past, firebase functions wouldn't reflect cookies unless they were named `__session`, per this documentation: https://firebase.google.com/docs/hosting/manage-cache#using_cookies
