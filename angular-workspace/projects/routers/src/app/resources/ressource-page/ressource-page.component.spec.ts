import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourcePageComponent } from './ressource-page.component';

describe('RessourcePageComponent', () => {
  let component: RessourcePageComponent;
  let fixture: ComponentFixture<RessourcePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RessourcePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RessourcePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
