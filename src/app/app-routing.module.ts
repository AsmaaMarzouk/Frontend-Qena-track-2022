import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/Admin/add-product/add-product.component';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { OrederMasterComponent } from './Components/oreder-master/oreder-master.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { AuthGuard } from './Guards/auth.guard';

// const routes: Routes = [
//   // first match wins
//    {path:'',redirectTo:'/Home',pathMatch:'full'}, // Default path 
//   {path:'Home',component:HomeComponent},
//   {path:'Products',component:ProductsComponent},
//   {path:'Order',component:OrederMasterComponent},
//   {path:'**',component:NotFoundPageComponent} //wildcard path

// ];
const routes: Routes = [
 {path:'',component:MainLayoutComponent,children:[
  // {path:'test',component:MainLayoutComponent,children:[
  {path:'',redirectTo:'/Home',pathMatch:'full'}, // Default path 
    {path:'Home',component:HomeComponent},
    {path:'Products',component:ProductsComponent},
    {path:'Products/:pid',component:ProductDetailsComponent},
    {path:'Order',component:OrederMasterComponent,canActivate:[AuthGuard]},
    {path:'NewProduct',component:AddProductComponent},
    {
      path: 'User', 
      loadChildren: () => import('src/app/Components/user/user.module').then(m => m.UserModule)
    },
    
 ]},
 {path:'resgister',component:UserRegisterComponent},
 {path:'Login',component:UserLoginComponent},
 {path:'Logout',component:UserLoginComponent},
 {path:'**',component:NotFoundPageComponent} //wildcard path


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
