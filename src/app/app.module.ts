import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
/* Feature Modules */
import { BookModule } from './book.module';

//homescrean
import { Home } from './home.component';

//import FormsModule 
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: Home },
    ]),
    BookModule
  ],
  declarations: [
    AppComponent,
    Home,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
