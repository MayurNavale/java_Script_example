import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyCounterComponent } from './my-counter/my-counter.component';
 
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
@NgModule({
  declarations: [
    AppComponent,MyCounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count :counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
