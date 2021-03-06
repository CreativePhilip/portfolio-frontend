import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticlesComponent } from './admin-articles.component';
import { AdminArticlesEditComponent } from "../admin-articles-edit/admin-articles-edit.component";
import { LoadingIndicatorComponent } from "../../../components/loading-indicator/loading-indicator.component";
import {  ReactiveFormsModule } from "@angular/forms";
import { EditorComponent } from "@tinymce/tinymce-angular";
import { ObserversModule } from "@angular/cdk/observers";
import { DatabaseService } from "../../../services/database-connection/database.service";
import { DatabaseServiceMock } from "../../../services/database-connection/database.service.mock";

describe('AdminArticlesComponent', () => {
  let component: AdminArticlesComponent;
  let fixture: ComponentFixture<AdminArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminArticlesComponent,
        AdminArticlesEditComponent,
        LoadingIndicatorComponent,
        EditorComponent,
      ],
    imports: [
      ReactiveFormsModule,
      ObserversModule,
    ],
    providers: [{provide: DatabaseService, useClass: DatabaseServiceMock}]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have article edit component be hidden', function () {
    expect(component.edit).toBeFalsy();
  });
});
