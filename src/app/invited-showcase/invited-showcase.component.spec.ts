import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitedShowcaseComponent } from './invited-showcase.component';

describe('InvitedShowcaseComponent', () => {
	let component: InvitedShowcaseComponent;
	let fixture: ComponentFixture<InvitedShowcaseComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [InvitedShowcaseComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(InvitedShowcaseComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
