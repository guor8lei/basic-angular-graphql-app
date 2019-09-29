import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GraphQLModule, HttpClientModule, FormsModule],
      declarations: [
        AppComponent, PokemonInfoComponent,
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
});
