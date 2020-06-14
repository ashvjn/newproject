import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectBusComponent } from './user/select-bus/select-bus.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { PrintComponent } from './user/print/print.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { BusSearchResultComponent } from './user/bus-search-result/bus-search-result.component';
import { HeaderComponent } from './user/header/header.component';
import { SelectSeatComponent } from './user/select-seat/select-seat.component'
const userRoute:Routes=[
  
  {path:'',component:HeaderComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'plan',component:SelectBusComponent},
  {path:'search',component:BusSearchResultComponent},
  {path:'seat',component:SelectSeatComponent},
  {path:'user-form',component:UserFormComponent},
  {path:'print',component:PrintComponent},
  
  ]

@NgModule({
  imports: [RouterModule.forRoot(userRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
