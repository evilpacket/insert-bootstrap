module.exports = function (url) {
    url = url || '//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css';
    var elem = document.createElement('link');
    elem.setAttribute('rel', 'stylesheet');
    elem.setAttribute('href', url);

    var head = document.getElementsByTagName('head')[0];
    head.appendChild(elem);
};
