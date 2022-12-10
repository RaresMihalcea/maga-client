import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyEmailAddressPage } from './verify-email-address.page';

describe('VerifyEmailAddressPage', () => {
  let component: VerifyEmailAddressPage;
  let fixture: ComponentFixture<VerifyEmailAddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyEmailAddressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyEmailAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
