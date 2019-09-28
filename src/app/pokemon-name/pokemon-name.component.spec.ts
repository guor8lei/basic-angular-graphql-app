import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { GraphQLModule } from '../graphql.module';
import { HttpClientModule } from '@angular/common/http';

import { PokemonNameComponent } from './pokemon-name.component';

describe('PokemonNameComponent', () => {
  let component: PokemonNameComponent;
  let fixture: ComponentFixture<PokemonNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        FormsModule, 
        GraphQLModule, 
        HttpClientModule
      ],
      declarations: [ PokemonNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
