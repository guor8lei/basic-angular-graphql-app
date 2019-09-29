import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OddComponent } from './odd.component';

describe('OddComponent', () => {
  let component: OddComponent;
  let fixture: ComponentFixture<OddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
// describe('findClass', () => {
//   it('should return a classification', () => {
//     const classed = "Weed Pokémon"
//     let response;
//     spyOn(OddComponent, 'findClass').and.returnValue(of(classed));
//
//     OddComponent.findClass().subscribe(res => {
//       classed = res;
//     });
//
//     expect(response).toEqual(classed);
//   });
// });
