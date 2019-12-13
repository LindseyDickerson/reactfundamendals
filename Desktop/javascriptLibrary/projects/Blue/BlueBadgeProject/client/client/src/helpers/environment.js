let APIURL = '';

switch (window.location.hostname) {
    //this is the local host name of your react app
    case 'localhost' || '127.0.0.1' :
        //This is the local host name of your api (server)
      APIURL = 'http://localhost:3001';
        break;
        //this is the deployed react application
      
    default: 
        //this is the full url of your deployed api (server)
        APIURL = 'https://lmd-gatsby-server.herokuapp.com'
          break;
}
export default APIURL;