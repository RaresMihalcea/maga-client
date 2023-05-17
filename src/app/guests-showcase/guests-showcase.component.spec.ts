import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsShowcaseComponent } from './guests-showcase.component';

describe('GuestsShowcaseComponent', () => {
	let component: GuestsShowcaseComponent;
	let fixture: ComponentFixture<GuestsShowcaseComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [GuestsShowcaseComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(GuestsShowcaseComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
