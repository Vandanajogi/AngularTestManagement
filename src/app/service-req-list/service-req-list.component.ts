import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { ServiceRequest } from '../service-request';
import { ServicereqService } from '../servicereq.service';

@Component({
  selector: 'app-service-req-list',
  templateUrl: './service-req-list.component.html',
  styleUrls: ['./service-req-list.component.css']
})
export class ServiceReqListComponent implements OnInit {

  serviceRequests: ServiceRequest[] = []; 
  isRadio: boolean=false;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;


  constructor(private observer: BreakpointObserver,private serviceRequestser: ServicereqService, private router: Router) { }

  ngOnInit(): void {
    this.getServiveReq();
  }



  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
     
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
    }
    // this.router.events
    //   .pipe(
    //     untilDestroyed(this),
    //     filter((e) => e instanceof NavigationEnd)
    //   )
    //   .subscribe(() => {
    //     if (this.sidenav.mode === 'over') {
    //       this.sidenav.close();
    //     }
    //   });



  private getServiveReq(){
    this.serviceRequestser.getServiceReqList().subscribe(data =>{
      this.serviceRequests=data;
    });
  }

  // updateServicereq(serviceId: number){
  //   if(this.radioButtonValidation()){
  //   this.router.navigate(['update-servicereq', serviceId]);
  //   }else{
  //     alert("Please Select The Request...");
  //   }
  // }

  // onRadioClick(serviceRequest: any){
  //   console.log(serviceRequest);
  //   this.isRadio=true;
  //   this.serviceRequests=serviceRequest
   
  // }

  // radioButtonValidation(){
  //   if(this.isRadio){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  //   }


    updateServiceReq(serviceId: number){
      this.router.navigate(['update-servicereq', serviceId]);
    }
}
