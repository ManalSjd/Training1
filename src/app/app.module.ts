import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import {AccordionModule} from 'primeng/accordion';     
import {MenuItem} from 'primeng/api'; 
import {InputNumberModule} from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import {MultiSelectModule} from 'primeng/multiselect';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ActivatedRoute } from '@angular/router';
import {CheckboxModule} from 'primeng/checkbox';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    FormulaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    InputNumberModule,
    FormsModule,
    MultiSelectModule,
    RadioButtonModule,
    CheckboxModule,
    BrowserAnimationsModule
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
