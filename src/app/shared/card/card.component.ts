import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  durationInSeconds = 2;
  @Input() item : any;
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }
 
  saveToLocalStorage() {
    localStorage.setItem(this.item.id, `https://live.staticflickr.com/${this.item.server}/${this.item.id}_${this.item.secret}.jpg`)
    this._snackBar.open('Your card was saved','Close', {
      duration: this.durationInSeconds * 1000,
    });
  }

  
  
}
