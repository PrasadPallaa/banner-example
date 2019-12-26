import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ManagementComponent } from './components/management/management.component';
import { TranslationComponent } from './components/translation/translation.component';
import { CreateComponent } from './components/create/create.component';
import { HistoryComponent } from './components/history/history.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ManagementMessageDetailComponent } from './components/management/management-message-detail/management-message-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { OverviewDetailComponent } from './components/overview/overview-detail/overview-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    OverviewComponent,
    ManagementComponent,
    TranslationComponent,
    CreateComponent,
    HistoryComponent,
    HomeComponent,
    ManagementMessageDetailComponent,
    OverviewDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
