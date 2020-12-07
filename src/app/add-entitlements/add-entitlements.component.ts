import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-add-entitlements',
  templateUrl: './add-entitlements.component.html',
  styleUrls: ['./add-entitlements.component.scss']
})
export class AddEntitlementsComponent implements OnInit {

  showDomain = false;
  showRole = false;
  showSubmit = false;

  constructor() {

  }

  ngOnInit(): void {

  }

  onAppChange(evt): void {
    if (evt.currentTarget.value) {
      this.showDomain = true;
    } else {
      this.showDomain = false;
      this.showRole = false;
      this.showSubmit = false;
    }
  }

  onDomainChange(evt): void {
    if (evt.currentTarget.value) {
      this.showRole = true;
    } else {
      this.showRole = false;
      this.showSubmit = false;
    }
  }

  onRoleChange(evt): void {
    if (!evt.currentTarget.value) {
      this.showSubmit = false;
    } else {
      this.showSubmit = true;
    }
  }

  onSubmit(): void {

  }
}
