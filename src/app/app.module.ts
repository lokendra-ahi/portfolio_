import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileHeadingComponent } from './profile-heading/profile-heading.component';
import { ProfileDataComponent } from './profile-data/profile-data.component';
import { ProfileProjectsComponent } from './profile-projects/profile-projects.component';
import { TypingAnimationModule } from 'angular-typing-animation';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { StoreModule } from '@ngrx/store';
import * as aa from './store/reducers/app.reducer';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProfileHeadingComponent,
    ProfileDataComponent,
    ProfileProjectsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    TypingAnimationModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot({ game: aa.reducer })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
