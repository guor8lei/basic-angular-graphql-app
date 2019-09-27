import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CoffeeShopComponent } from './coffee-shop/coffee-shop.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GraphQLModule, HttpClientModule],
      declarations: [
        AppComponent, CoffeeShopComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bill-learning-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('bill-learning-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('bill-learning-app app is running!');
  });
});
