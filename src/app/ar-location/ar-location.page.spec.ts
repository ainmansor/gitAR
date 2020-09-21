import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArLocationPage } from './ar-location.page';

describe('ArLocationPage', () => {
  let component: ArLocationPage;
  let fixture: ComponentFixture<ArLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArLocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
