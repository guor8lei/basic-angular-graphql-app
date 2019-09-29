import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JigComponent } from './jig.component';

describe('JigComponent', () => {
  let component: JigComponent;
  let fixture: ComponentFixture<JigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// describe('findFleeRate', () => {
//   it('should return a fleeRate', () => {
//     const fr = 0.1
//     let response;
//     spyOn(JigComponent, 'findFleeRate').and.returnValue(of(fr));
//
//     JigComponent.findFleeRate().subscribe(res => {
//       fr = res;
//     });
//
//     expect(response).toEqual(fr);
//   });
// });
