import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParticipatePage } from './participate.page';

describe('ParticipatePage', () => {
  let component: ParticipatePage;
  let fixture: ComponentFixture<ParticipatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParticipatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
