class SVGResourceHelper {

  addRequest(resourceURL, callback) {
    let Request, xhr;

    this.requests[resourceURL] = {};
    this.requests[resourceURL].state = 'loading';
    this.requests[resourceURL].callbacks = [callback];

    xhr = new XMLHttpRequest();

    xhr.onload = () => {

      xhr.onload = null;

      let fragment = document.createDocumentFragment();
      let x = document.createElement('x');

      x.innerHTML = xhr.responseText;
      fragment.appendChild(x.getElementsByTagName('svg')[0]);
      fragment.firstChild.style.display = 'none';
      document.body.appendChild(fragment);

      this.requests = window.__ReactIconSVGSymbolResourceRequests;
      this.requests[resourceURL].state = 'loaded';
      this.requests[resourceURL].callbacks.map((callback) => {
        callback();
      });
    };

    xhr.onerror = () => {
      // console.log('error happend')
      xhr.onerror = null;
      xhr.ontimeout = null;
      this.requests = window.__ReactIconSVGSymbolResourceRequests;
      this.requests[resourceURL].state = 'error';
    };

    xhr.ontimeout = () => {
      // console.log('timeout happend')
      xhr.onerror = null;
      xhr.ontimeout = null;
      this.requests = window.__ReactIconSVGSymbolResourceRequests;
      this.requests[resourceURL].state = 'timeout';
    };

    if ('withCredentials' in xhr) {
      xhr.open('GET', resourceURL, true);
    } else if (typeof XDomainRequest !== 'undefined') {
      xhr = new XDomainRequest();
      xhr.open('GET', resourceURL);
    } else {
      xhr = null;
    }

    if (xhr) {
      xhr.send();
    }
  }

  load(resourceURL, callback) {
    this.requests = window.__ReactIconSVGSymbolResourceRequests || {};
    window.__ReactIconSVGSymbolResourceRequests = this.requests;

    if (!resourceURL.length) {
      console.log('Resource came along with the document, abort loading');
      return;
    }

    if (!this.requests[resourceURL]) {
      this.addRequest(resourceURL, callback);
      return;
    }

    switch (this.requests[resourceURL].state) {
      case 'loaded':
        callback();
        break;

      case 'loading':
        this.requests[resourceURL].callbacks.push(callback);
        break;

      default:
        console.log('Resource request is error or timeout or lost..')
        break;
    }
  }
}

export default new SVGResourceHelper();