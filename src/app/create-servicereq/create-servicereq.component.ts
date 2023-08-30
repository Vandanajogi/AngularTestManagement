import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceRequest } from '../service-request';
import { ServicereqService } from '../servicereq.service';


@Component({
  selector: 'app-create-servicereq',
  templateUrl: './create-servicereq.component.html',
  styleUrls: ['./create-servicereq.component.css']
})
export class CreateServicereqComponent implements OnInit {
  serviceRequest: ServiceRequest=new ServiceRequest();
 
  constructor(private serviceRequestser: ServicereqService,private router:Router) { }

  ngOnInit(): void {
  }

  saveServiceReq(){
    this.serviceRequestser.createServiceReq(this.serviceRequest).subscribe( data =>{
      console.log(data);
     this.goToServiceReqList();
    },
    error => console.log(error));
   }

  goToServiceReqList(){
    this.router.navigate(['/serviceRequests']);
  }
  
  onSubmit(){
    console.log(this.serviceRequest);
    this.saveServiceReq();
  }

  cancleServiceReq(){
    this.router.navigate(['/serviceRequests']);
  }
  }

