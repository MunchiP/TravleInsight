//-----------------------1
// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';

// //Leer la api

// import { provideHttpClient } from '@angular/common/http';

// bootstrapApplication(App, {
//   providers: [
//     provideHttpClient()
//   ]
// })

// , appConfig)
//   .catch((err) => console.error(err));

//-----------------------2
// import { ApplicationConfig } from '@angular/core';
// import { provideHttpClient } from '@angular/common/http';
// import { App } from './app/app';

// export const appConfig: ApplicationConfig = {
//   providers: [provideHttpClient()]
// };


//---------------------3
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config'; // <- usa este archivo

bootstrapApplication(App, appConfig)
  .catch(err => console.error(err));