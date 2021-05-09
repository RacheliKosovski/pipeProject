import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntermediaryComponent } from './intermediary/intermediary.component';
import { EditIntermediaryComponent } from './edit-intermediary/edit-intermediary.component';

@NgModule({
  declarations: [
    AppComponent,
    IntermediaryComponent,
    EditIntermediaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }