import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output()
  soeidChangedEmitter = new EventEmitter();
  constructor(){

  }

  ngOnInit(): void {

  }

  onSubmit(id): void {
    const val = id.value.trim();
    if (!val) {
      return;
    }

    this.soeidChangedEmitter.emit(val);

  }
}
