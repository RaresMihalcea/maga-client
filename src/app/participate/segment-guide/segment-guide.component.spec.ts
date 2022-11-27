import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SegmentGuideComponent } from './segment-guide.component';

describe('SegmentGuideComponent', () => {
  let component: SegmentGuideComponent;
  let fixture: ComponentFixture<SegmentGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentGuideComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SegmentGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
