import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TestService } from './user/services/test.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './user/header/header.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { SelectBusComponent } from './user/select-bus/select-bus.component';
import { BusSearchResultComponent } from './user/bus-search-result/bus-search-result.component';
import { SelectSeatComponent } from './user/select-seat/select-seat.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { PrintComponent } from './user/print/print.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    SelectBusComponent,
    BusSearchResultComponent,
    SelectSeatComponent,
    UserFormComponent,
    PrintComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
