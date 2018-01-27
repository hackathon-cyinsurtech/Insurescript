class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static xhr(route, params, verb) {
    const token = 'w8G9WpBm6t3YZx25L';
    const host = 'https://sandbox-healthservice.priaid.ch/'
    const url = `${host}${route}&token=${token}&language=en-gb&format=json`
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    options.headers = Api.headers()
    return fetch(url, options).then( resp => {
      let json = resp.json();
      if (resp.ok) {
        return json
      }
      return json.then(err => {throw err});
    }).then( json => json.results );
  }
}
export default Api
