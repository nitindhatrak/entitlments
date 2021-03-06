import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { AppService } from '../services/app.service';


@Component({
  selector: 'app-entitlements',
  templateUrl: './entitlements.component.html',
  styleUrls: ['./entitlements.component.scss']
})
export class EntitlementsComponent implements OnInit {

  @Output()
  entitlementViewEmitter = new EventEmitter();

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

  editClick(evt): void {
    alert(evt);
  }

  onNewClicked(): void {
    this.entitlementViewEmitter.emit({isNew: true});
  }
}
