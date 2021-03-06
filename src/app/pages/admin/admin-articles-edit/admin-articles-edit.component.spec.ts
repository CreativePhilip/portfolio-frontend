import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticlesEditComponent } from './admin-articles-edit.component';
import { DatabaseService } from "../../../services/database-connection/database.service";
import { DatabaseServiceMock } from "../../../services/database-connection/database.service.mock";
// @ts-ignore
import { MatSnackBar } from "@angular/material/snack-bar";
import { OverlayModule } from "@angular/cdk/overlay";

describe('AdminArticlesEditComponent', () => {
  let component: AdminArticlesEditComponent;
  let fixture: ComponentFixture<AdminArticlesEditComponent>;
  let snackBarProvider = {

  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminArticlesEditComponent ],
      providers: [
        {provide: DatabaseService, useClass: DatabaseServiceMock},
        {provide: MatSnackBar, useValues: snackBarProvider},
        ],
      imports: [OverlayModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArticlesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
