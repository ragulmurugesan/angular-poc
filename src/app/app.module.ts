import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';

const routes: Routes = [
  
  {path: 'hey', component: StepOneComponent},
  {path: '', redirectTo: '/hey', pathMatch: 'full'},
  {path: 'Two', component: StepTwoComponent  }
]
@NgModule({
  declarations: [
    AppComponent,
    StepOneComponent, StepTwoComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
