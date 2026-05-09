import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockPdfComponent } from './unlock-pdf.component';

describe('UnlockPdfComponent', () => {
  let component: UnlockPdfComponent;
  let fixture: ComponentFixture<UnlockPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnlockPdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlockPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
