import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateListItemComponent } from './estate-list-item.component';

describe('EstateListItemComponent', () => {
  let component: EstateListItemComponent;
  let fixture: ComponentFixture<EstateListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstateListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstateListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
