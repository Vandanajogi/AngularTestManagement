import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateServicereqComponent } from './create-servicereq/create-servicereq.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServiceReqListComponent } from './service-req-list/service-req-list.component';
import { UpdateServicereqComponent } from './update-servicereq/update-servicereq.component';

// const routes: Routes = [
//   {path: 'serviceRequests', component: ServiceReqListComponent },
//   {path: 'create-servicereq', component:CreateServicereqComponent},
//   {path: '',redirectTo:'serviceRequests', pathMatch:'full'},
//    {path: 'update-servicereq/:id', component: UpdateServicereqComponent},
// ];

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'serviceRequests',
  },
  {
    path: 'serviceRequests',
    component: ServiceReqListComponent,
  },
  {
    path: 'create-servicereq',
    component: CreateServicereqComponent,
  },
  {
    path: 'update-servicereq/:id',
    component: UpdateServicereqComponent,
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
