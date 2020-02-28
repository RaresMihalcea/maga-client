import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsShowcaseComponent } from './sponsors-showcase.component';

describe('SponsorsShowcaseComponent', () => {
	let component: SponsorsShowcaseComponent;
	let fixture: ComponentFixture<SponsorsShowcaseComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SponsorsShowcaseComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SponsorsShowcaseComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
