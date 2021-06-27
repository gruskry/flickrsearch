import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


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
    // let button: any = document.querySelector('.search-button')
    // console.log(button)
    // debugger
    // if(this.value !== undefined) {
    //   button.removeAttribute('disabled')
    // }
  }
  
  sendSearchResult() {
    this.keywordEmmiter.emit(this.value)
  }
}
