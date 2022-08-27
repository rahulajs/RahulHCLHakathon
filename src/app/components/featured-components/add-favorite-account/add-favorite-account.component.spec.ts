import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddFavoriteAccountComponent } from './add-favorite-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

describe('AddFavoriteAccountComponent', () => {
  let component: AddFavoriteAccountComponent;
  let fixture: ComponentFixture<AddFavoriteAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddFavoriteAccountComponent],
      imports: [ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFavoriteAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Add favorite account'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Add favorite account');
  });

  describe('Submit Account Details: Function Call', () => {
    it('submitAccountDetails method to be defined', () => {
      expect(component.submitAccountDetails).toBeDefined();
    });

    it('form invalid when empty', () => {
      expect(component.addAccountForm.valid).toBeFalsy();
    });

    // it('Account name field validity', () => {
    //   const accountName = component.addAccountForm.controls['accountName'];
    //   expect(accountName.valid).toBeFalsy();

    //   let errors = {};
    //   accountName.setValue('');
    //   errors = accountName.errors || {};
    //   expect(errors['required']).toBeTruthy(); // this works
    //   expect(errors['minLength']).toBeTruthy(); // this fails, "undefined"
    // });
  });
});
