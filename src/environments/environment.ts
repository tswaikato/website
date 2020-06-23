// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  msalAuthConfig:{
    auth: {
      clientId: '5efe6947-d960-4808-84f9-6454a37be0b6', // This is your client ID
      authority: 'https://login.microsoftonline.com/89e1e916-0dc8-45c8-8e19-ca935a757a54', // This is your tenant info
    }
  },
  msalSettingsConfig:{
    consentScopes: [
      'user.read',
      'openid',
      'profile',
    ],
    unprotectedResources: [],
    protectedResourceMap: [
      ['https://graph.microsoft.com/v1.0/me', ['user.read']]
    ],
    extraQueryParameters: {}
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
