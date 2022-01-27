let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3800';
        break;

    case 'ketch-twournal-client.herokuapp.com':
        APIURL = 'https://ketch-twournal-v1.herokuapp.com';
        break;
}

export default APIURL;