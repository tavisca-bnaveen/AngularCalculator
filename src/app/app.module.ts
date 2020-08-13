import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SimpleComponent} from './simplecomponent';
import {CalculatorComponent} from './calculator';
// NgModule decorator with properties
// 1. imports: of the type array, used to import standard and external
// angular modules in current application
// 2. declarations: of the type array, used to declare all
// components, pipes and directives of current application
// 3. providers: of the type array, used to provide D.I. Container
// for the current Angular module to register all angular services
// 4. entryComponent: of the type array, used to define Angular
// components as Elements so that they can be exposed to other
// JavaSCript libs/frwks
// 5. bootsrap: of the type array, used to bootsrap all those
// components from declarations array so that they can be used to
// load and render in browser
@NgModule({
  declarations: [
    AppComponent, SimpleComponent,CalculatorComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
