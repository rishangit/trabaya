import { ajax } from 'rxjs/ajax';
import { serverPath, version } from './constants';

const httpGet = ({ call }) => {
  const sessionString = localStorage.getItem('session');
  if (sessionString) {
    const session = JSON.parse(sessionString);
    let request_url = `${serverPath}/api/${version}/${call}`;
    return ajax({
      url: request_url,
      crossDomain: true,
      withCredentials: false,
      headers: {
        'Access-Control-Allow-Origin': 'http://staging.traction.network',
        'x-requested-with': 'XMLHttpRequest',
        'Content-type': 'application/json',
        'X-USER-TOKEN': session.authentication_token,
        'X-USER-EMAIL': session.email,
      },
      method: 'GET',
      responseType: 'json',
      timeout: 0,
      createXHR: function () {
        return new XMLHttpRequest();
      },
    });
  } else {
    console.log('session is empty');
  }
};

const httpPost = ({ call, data }) => {
  let request_url = `${serverPath}`;
  let headers = {
    'Access-Control-Allow-Origin': 'http://staging.traction.network',
    'Content-type': 'application/json',
  }
  const sessionString = localStorage.getItem('session');
  let jsonData = JSON.stringify(data);
  if (sessionString) {
    const session = JSON.parse(sessionString);
     request_url =`${request_url}/api/${version}/${call}`;
     headers =  {
      ...headers,
      'x-requested-with': 'XMLHttpRequest',
      'X-USER-TOKEN': session.authentication_token,
      'X-USER-EMAIL': session.email,
    }
  }else{
    request_url =`${request_url}/${call}`;
  }
  return ajax({
    url: request_url,
    method: 'POST',
    headers,
    body: jsonData,
  });
};

const httpPut = ({ call, data }) => {
  let request_url = `${serverPath}`;
  let headers = {
    'Content-type': 'application/json',
  }
  const sessionString = localStorage.getItem('session');
  let jsonData = JSON.stringify(data);
  if (sessionString) {
    const session = JSON.parse(sessionString);
     request_url =`${request_url}/api/${version}/${call}`;
     headers =  {
      ...headers,
      'Access-Control-Allow-Origin': 'http://staging.traction.network',
      'x-requested-with': 'XMLHttpRequest',
      'X-USER-TOKEN': session.authentication_token,
      'X-USER-EMAIL': session.email,
    }
  }else{
    request_url =`${request_url}/${call}`;
  }
  return ajax({
    url: request_url,
    method: 'PUT',
    headers,
    body: jsonData,
  });
};

export { httpPost, httpGet, httpPut};
