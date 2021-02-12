import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleEntryPage } from './single-entry.page';

describe('SingleEntryPage', () => {
  let component: SingleEntryPage;
  let fixture: ComponentFixture<SingleEntryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleEntryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
