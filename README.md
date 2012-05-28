twstream
========
Twstream is a tiny wrapper between your app and the Twitter Streaming API that lets you forget all the boilerplate and focus on the fun stuff.

You can install it via `npm` directly prompting the following command:
```npm install twstream```

After that, you just have to load it:

```var stream = require('twstream')```

Then, you just have to call methods `.init()` with your credentials required by the API and `.request()` to send the request:
```
stream.init('user','password')
stream.request(['one word','another word','whatever else...'], function(data){
  //whatever you do with every tweet emited by the stream...
})
```