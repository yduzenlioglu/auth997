import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDGfEqYnTMXp7XU33J1L2h_SdmrNdTFBN0",
  authDomain: "my-app-loginn.firebaseapp.com",
  databaseURL: "https://my-app-loginn.firebaseio.com",
  projectId: "my-app-loginn",
  storageBucket: "my-app-loginn.appspot.com",
  messagingSenderId: "132745661579"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
