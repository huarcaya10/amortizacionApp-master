import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SisFrancesComponentComponent } from './sis-frances-component/sis-frances-component.component';
import { SisAlemanComponentComponent } from './sis-aleman-component/sis-aleman-component.component';
import { SisInglesComponentComponent } from './sis-ingles-component/sis-ingles-component.component';
import { SisFlatComponentComponent } from './sis-flat-component/sis-flat-component.component';

const  appRoutes : Routes =[

  {path: 'sistemafrances',component: SisFrancesComponentComponent},
  {path: 'sistemaaleman',component: SisAlemanComponentComponent},
  {path: 'sistemaingles',component: SisInglesComponentComponent},
  {path: 'sistemaflat',component: SisFlatComponentComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SisFrancesComponentComponent,
    SisAlemanComponentComponent,
    SisInglesComponentComponent,
    SisFlatComponentComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
