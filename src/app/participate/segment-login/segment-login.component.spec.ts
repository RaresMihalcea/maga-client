import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SegmentLoginComponent } from './segment-login.component';

describe('SegmentLoginComponent', () => {
  let component: SegmentLoginComponent;
  let fixture: ComponentFixture<SegmentLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentLoginComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SegmentLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
