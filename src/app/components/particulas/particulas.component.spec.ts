import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticulasComponent } from './particulas.component';

describe('ParticulasComponent', () => {
  let component: ParticulasComponent;
  let fixture: ComponentFixture<ParticulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticulasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
