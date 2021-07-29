import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookmarksComponent } from './bookmarks.component';
describe('BookmarksComponent', () => {
  let component: BookmarksComponent;
  let fixture: ComponentFixture<BookmarksComponent>

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations:[BookmarksComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksComponent)
    component = fixture.componentInstance;
  })

  it('array savedCards shouldn`t is empty', () => {
    localStorage.clear()
    localStorage.setItem('1', '2')
    fixture.detectChanges()
    expect(component.savedCards.length).toBe(1);
  })

  describe('#removeCard', () => {
    it('localStorage and array savedCards should be is empty', () => {
      localStorage.clear()
      localStorage.setItem('1', '2')
      fixture.detectChanges()
      component.removeCard('2')
      expect(localStorage.length).toBe(0)
      expect(component.savedCards.length).toBe(0)
    })
  })
})
