import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencesPage } from './conferences.page';

describe('ConferencesPage', () => {
    let component: ConferencesPage;
    let fixture: ComponentFixture<ConferencesPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ConferencesPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ConferencesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
