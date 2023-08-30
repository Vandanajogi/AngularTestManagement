import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceRequest } from '../service-request';
import { ServicereqService } from '../servicereq.service';

@Component({
  selector: 'app-update-servicereq',
  templateUrl: './update-servicereq.component.html',
  styleUrls: ['./update-servicereq.component.css']
})
export class UpdateServicereqComponent implements OnInit {
  serviceId!: number;
  serviceRequest: ServiceRequest=new ServiceRequest();
  constructor(private serviceRequestser: ServicereqService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.serviceId = this.route.snapshot.params['id'];
    this.serviceRequestser.getServiceById(this.serviceId).subscribe(data => {
      this.serviceRequest = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.serviceRequestser.updateServiceReq(this.serviceId, this.serviceRequest).subscribe( data =>{
      this.goToServiceReqList();
    }
    , error => console.log(error));
  }

  goToServiceReqList(){
    this.router.navigate(['/serviceRequests']);
  }
}
