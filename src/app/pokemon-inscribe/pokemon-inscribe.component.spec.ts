import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonInscribeComponent } from './pokemon-inscribe.component';

describe('PokemonInscribeComponent', () => {
  let component: PokemonInscribeComponent;
  let fixture: ComponentFixture<PokemonInscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonInscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonInscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
