import { Component, OnInit } from "@angular/core";
import { AppService } from '../services/app.service';


@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.scss']
})
export class ApprovalsComponent implements OnInit {

  entitlements = [
    {app: 'TRHUB', domain: 'SPRS-TH', roles: ['READ-ONLY']},
    {app: 'TRHUB', domain: 'SPRS-KR', roles: ['READ-ONLY']},
    {app: 'TRHUB', domain: 'SPRS-HK', roles: ['READ-ONLY']},
    {app: 'ARR', domain: 'ARR', roles: ['READ-WRITE']}
  ];

  constructor(private service: AppService) {

  }

  ngOnInit(): void {

  }

  approveClick(): void {

  }

  rejectClick(): void {

  }
}
