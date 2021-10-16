import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDateViewComponent } from './dialog-date-view.component';

describe('DialogDateViewComponent', () => {
  let component: DialogDateViewComponent;
  let fixture: ComponentFixture<DialogDateViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDateViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
