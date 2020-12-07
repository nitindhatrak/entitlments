import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'entitlements';
  currentTab = 1;
  hasEntitlements = true;


  constructor(private service: AppService) {

  }

  async onSoeidChanged(evt): Promise<any> {
    const value = await this.service.getEntitlements(evt);
  }



  onEntitlementsClicked(): void {
    this.currentTab = 1;
  }

  onApprovalsClicked(): void {
    this.currentTab = 2;
  }






}
