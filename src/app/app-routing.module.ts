import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ComputersComponent } from './computers/computers.component';
import { DetailComponent } from './detail/detail.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { MyordersComponent } from './myorders/myorders.component';
import { ProceedComponent } from './proceed/proceed.component';
const routes: Routes = [{ path: '', component: ComputersComponent },
                        { path:'detail/:id',component:DetailComponent},
                        { path: 'proceed', component:ProceedComponent},
                        { path: 'page/:id', component:ComputersComponent},
                        { path: 'order', component:MyordersComponent},
                        { path: 'proceed/:id', component:ProceedComponent},
                        { path: 'invoice', component:InvoiceComponent},
                        { path: 'about', component:AboutComponent},
                        { path: '**', component:ComputersComponent,redirectTo:''  },
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
