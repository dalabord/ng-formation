import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ClassroomModule } from './classroom/classroom.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ClassroomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
