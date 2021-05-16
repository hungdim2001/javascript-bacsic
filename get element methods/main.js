var f8LinkElement = document.querySelector('a:first-child');
var f8ShortLink = f8LinkElement.href;
document.querySelector('a:nth-child(2)').href = f8ShortLink;
document.querySelector('div').setAttribute('data-url', f8ShortLink);