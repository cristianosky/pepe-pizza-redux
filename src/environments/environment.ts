// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiUrl: 'http://localhost:3000/',
  apiUrl: 'https://polar-harbor-69814.herokuapp.com',
  fire : {
    apiKey: 'AIzaSyDcFfzYNFfBFYG1lXgl2B7X2WuDH3rBy4M',
    authDomain: 'uniformes-op.firebaseapp.com',
    databaseURL: 'https://uniformes-op-default-rtdb.firebaseio.com',
    projectId: 'uniformes-op',
    storageBucket: 'uniformes-op.appspot.com',
    messagingSenderId: '955779096766',
    appId: '1:955779096766:web:46b24b219fc9238bdd3eef',
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
