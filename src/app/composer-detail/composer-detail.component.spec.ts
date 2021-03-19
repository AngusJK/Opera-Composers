import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposerDetailComponent } from './composer-detail.component';

describe('ComposerDetailComponent', () => {
  let component: ComposerDetailComponent;
  let fixture: ComponentFixture<ComposerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
