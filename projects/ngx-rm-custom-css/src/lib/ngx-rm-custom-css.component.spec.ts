import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRmCustomCssComponent } from './ngx-rm-custom-css.component';

describe('NgxRmCustomCssComponent', () => {
  let component: NgxRmCustomCssComponent;
  let fixture: ComponentFixture<NgxRmCustomCssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxRmCustomCssComponent]
    });
    fixture = TestBed.createComponent(NgxRmCustomCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
