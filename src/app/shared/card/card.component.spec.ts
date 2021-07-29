import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotosInterface } from './../models/data.model';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations:[CardComponent],
      imports: [MatSnackBarModule, BrowserAnimationsModule]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  })

  describe('#saveToLocalStorage', () => {
    it('should save to local storage', () => {
      let data = {
        farm: 1,
        id: 'string',
        isfamily: 1,
        isfriend: 1,
        ispublic: 1,
        owner: 'string',
        secret: 'string',
        server: 'string',
        title: 'string',
      };

      component.item = data

      let link = `https://live.staticflickr.com/${component.item.server}/${component.item.id}_${component.item.secret}.jpg`
      component.saveToLocalStorage();
      fixture.detectChanges()

      expect(localStorage.getItem(`${data.id}`)).toEqual(link)

    })
  })
})
