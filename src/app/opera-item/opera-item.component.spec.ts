import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperaItemComponent } from './opera-item.component';

describe('OperaItemComponent', () => {
  let component: OperaItemComponent;
  let fixture: ComponentFixture<OperaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperaItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
