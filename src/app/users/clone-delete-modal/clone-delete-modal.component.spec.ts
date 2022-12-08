import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneDeleteModalComponent } from './clone-delete-modal.component';

describe('CloneDeleteModalComponent', () => {
  let component: CloneDeleteModalComponent;
  let fixture: ComponentFixture<CloneDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloneDeleteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
