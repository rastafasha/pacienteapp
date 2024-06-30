// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //local
  // url_backend: 'http://127.0.0.1:8000/',
  // url_servicios: 'http://127.0.0.1:8000/api',
  // url_frontend: 'http://localhost:4200/',
  // url_media: 'http://127.0.0.1:8000/storage/',
  
  //remoto demo  dominio
  // url_backend: 'https://clinica.health-connect.me/backend-api-citas/',
  // url_servicios: 'https://clinica.health-connect.me/backend-api-citas/public/api',
  // url_frontend: 'https://paciente.health-connect.me/',
  // url_media: 'https://clinica.health-connect.me/backend-api-citas/storage/app/public/',
  

  //remoto cliente Clin Santiago de leon

    url_backend: 'https://csdleondeccs.health-connect.me/backend-api-citas/',
    url_servicios: 'https://csdleondeccs.health-connect.me/backend-api-citas/public/api',
    url_frontend: 'https://pacsdleondeccs.health-connect.me/',
    url_media: 'https://csdleondeccs.health-connect.me/backend-api-citas/storage/app/public/',

  

  //remoto SOLUMEDICA
  // url_backend: 'https://solumedica.health-connect.me/backend-api-citas/',
  // url_servicios: 'https://solumedica.health-connect.me/backend-api-citas/public/api',
  // url_frontend: 'https://psolumedica.health-connect.me/',
  // url_media: 'https://solumedica.health-connect.me/backend-api-citas/storage/app/public/',

  //remoto
  // url_backend: 'https://citasmedicasv1.malcolmcordova.com/backend-api-citas/',
  // url_servicios: 'https://citasmedicasv1.malcolmcordova.com/backend-api-citas/public/api',
  // url_frontend: 'https://paciente.malcolmcordova.com/',
  // url_media: 'https://citasmedicasv1.malcolmcordova.com/backend-api-citas/storage/app/public/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
