import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookmarksComponent } from './bookmarks.component';
describe('BookmarksComponent', () => {
  let component: BookmarksComponent;
  let fixture: ComponentFixture<BookmarksComponent>
  let storage;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations:[BookmarksComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksComponent)
    component = fixture.componentInstance;
    localStorage.clear()
  })

  it('array savedCards shouldn`t is empty', () => {
    spyOn(localStorage, 'getItem').and.callFake(() => 'local')
    fixture.detectChanges()
    expect(component.savedCards).toEqual(['local']);
  })

  describe('#removeCard', () => {
    it('localStorage and array savedCards should be is empty', () => {
      spyOn(localStorage, 'getItem').and.callFake(() => '2');
      fixture.detectChanges()
      component.removeCard('2')
      expect(localStorage.length).toBe(0)
      expect(component.savedCards.length).toBe(0)
    })
  })
})
