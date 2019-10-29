import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsPage } from './instructors.page';

describe('InstructorsPage', () => {
    let component: InstructorsPage;
    let fixture: ComponentFixture<InstructorsPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InstructorsPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InstructorsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
