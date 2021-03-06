![Flyght](https://github.com/aj1thkr1sh/flyght/blob/main/flyght.png?raw=true)

# Flyght
Hi, library for making Single Page Application (SPA) in Vanilla JavaScript library

Flyght works based ```window.loction.hash``` whenever the hash changes, the configured URL will be triggered and page will be loaded

One can easily make Single Page Application using the Flyght

Simple, yet powerful

Note : Single Page Application might affect SEO, choose appropriate case to use

## Usage
```
<script type="text/javascript" src="https://unpkg.com/flyght"></script>
```
Simple right?

Yes, Simple yet powerful

## Configuration

You need to init the Flyght with required parameter, then your webpage will turn into SPA, like the Flyght way

```
Flyght.init({
  idElement : "idElement",
  urlConfiguration : [ {
    hash : "#about",
    url : "/about.html",
    type : "GET"
  }, {
    hash : "#contact",
    url : "/contact.html",
    type : "GET"
  }, {
    hash : "#team",
    url : "/team.html",
    type : "GET"
  } ],
  requestHeader : [ {
    header : 'Content-type',
    value : 'application/json'
  } ]
});
```
### Configuration Parameters

1. idElement : Is the id of the DOM Element, where the loaded page is rendered

2. urlConfiguration : Is the Array of Object that has, url, hash, and request type
      1. hash : The hash we provided
      2. url : For the given hash respective URL will be called and response will be attached to the idElement content
      3. type : The request type URL to be called
3. requestHeader : The header to be attached to the request
      1. header : The header value to be attached to the header
      2. value : The value to the request header

[:star: on GitHub](https://github.com/aj1thkr1sh/flyght) if you love
