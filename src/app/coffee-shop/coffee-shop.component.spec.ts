import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GraphQLModule } from '../graphql.module';
import { CoffeeShopComponent } from './coffee-shop.component';
import { HttpClientModule } from '@angular/common/http';

describe('CoffeeShopComponent', () => {
  let component: CoffeeShopComponent;
  let fixture: ComponentFixture<CoffeeShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GraphQLModule, HttpClientModule],
      declarations: [ CoffeeShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
