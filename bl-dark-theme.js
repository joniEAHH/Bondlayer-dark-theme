window.addEventListener('DOMNodeRemoved', function() {
  if (document.getElementById('bl-dark-theme') == null) {
    var head = document.getElementsByTagName('head')[0],
      link = document.createElement('link');

    link.id     = 'bl-dark-theme';
    link.rel    = 'stylesheet';
    link.type   = 'text/css';
    link.href   = chrome.extension.getURL('bl-dark-theme.min.css');
    link.media  = 'all';

    head.appendChild(link);
  }
});

