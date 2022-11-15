import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { BmoviesComponent } from './components/bmovies/bmovies.component';
import { ContactComponent } from './components/contact/contact.component';
import { ListComponent } from './components/list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule  } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';


const appRouts:Routes = [
  {path:'' ,redirectTo:'home', pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'bgmovies' , component: BmoviesComponent},
  {path:'contact' , component:ContactComponent},
  {path:'list' , component:ListComponent},
  {path:'login' , component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BmoviesComponent,
    ContactComponent,
    ListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRouts),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
