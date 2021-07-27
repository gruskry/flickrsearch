import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() keywordEmmiter: EventEmitter <string> = new EventEmitter();
  value: any;
  constructor() { }

  ngOnInit(): void {
  }

  sendSearchResult() {
    this.keywordEmmiter.emit(this.value)
  }
}
