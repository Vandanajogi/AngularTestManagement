import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from '../feedback';
import { ServicereqService } from '../servicereq.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
feedback: Feedback=new Feedback();

  constructor(private serviceRequestser: ServicereqService, private router:Router) { }

  ngOnInit(): void {
  }

  saveFeedback(){
    this.serviceRequestser.createFeedback(this.feedback).subscribe( data =>{
      console.log(data);
     this.goToServiceReqList();
    },
    error => console.log(error));
   }

  goToServiceReqList(){
    this.router.navigate(['/serviceRequests']);
  }
  
  onSubmit(){
    console.log(this.feedback);
    this.saveFeedback();
  }

}
