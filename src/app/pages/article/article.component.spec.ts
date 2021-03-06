import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';
import { MainNavComponent } from "../../components/navbars/main-nav/main-nav.component";
import { RouterTestingModule } from "@angular/router/testing";
import { DatabaseService } from "../../services/database-connection/database.service";
import { DatabaseServiceMock } from "../../services/database-connection/database.service.mock";

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleComponent, MainNavComponent ],
      imports: [ RouterTestingModule ],
      providers: [{provide: DatabaseService, useClass: DatabaseServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
