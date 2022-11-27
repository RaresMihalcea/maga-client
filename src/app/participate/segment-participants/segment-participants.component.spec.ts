import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SegmentParticipantsComponent } from './segment-participants.component';

describe('SegmentParticipantsComponent', () => {
  let component: SegmentParticipantsComponent;
  let fixture: ComponentFixture<SegmentParticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentParticipantsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SegmentParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
