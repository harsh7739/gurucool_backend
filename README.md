# gurucool_backend

### URL Shortener
##### This is Backend, for url shortener app means this will short long url into short as we will want, and that short url will work same as original or long Url


### For User Register  https://url-shortener-dyxn6ubhr-harsh7739s-projects.vercel.app/users/register
 ##### For Registration, Send POST request with user Credential on given route  e.g {"username":"Harshranjan","email":"abc@gmail.com","pass":"abc123"}

### For User Login https://url-shortener-dyxn6ubhr-harsh7739s-projects.vercel.app/users/login

##### For Login, Send POST request with user Credential on given route  e.g {"email":"abc@gmail.com","pass":"abc123"}

### For Url Shorting https://url-shortener-dyxn6ubhr-harsh7739s-projects.vercel.app/url/shorten

Shorten a URL: Send a POST request to given end point with a JSON body like:

{
  "originalUrl": "https://www.example.com/very/long/url"
}

Response:
    {
        "originalUrl": "https://www.example.com/very/long/url",
         "shortUrl": "http://localhost:3000/abc12345"
    }
