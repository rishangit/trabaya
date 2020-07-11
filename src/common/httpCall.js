import { ajax } from 'rxjs/ajax';
import { serverPath } from './constants';

const httpGet = ({ call }) => {
  const sessionString = localStorage.getItem('session');
  if (sessionString) {
    let request_url = `${serverPath}/api/${call}`;
    return ajax({
      url: request_url,
      crossDomain: true,
      withCredentials: false,
      headers: {
        'x-requested-with': 'XMLHttpRequest',
        'Content-type': 'application/json',
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
    'Content-type': 'application/json',
  }
  const sessionString = localStorage.getItem('session');
  let jsonData = JSON.stringify(data);
  if (sessionString) {
     request_url =`${request_url}/api/${call}`;
     headers =  {
      ...headers,
      'x-requested-with': 'XMLHttpRequest',
    }
  }else{
    request_url =`${request_url}/api/${call}`;
  }
  return ajax({
    url: request_url,
    method: 'POST',
    headers,
    body: jsonData,
  });
};


export { httpPost, httpGet};
