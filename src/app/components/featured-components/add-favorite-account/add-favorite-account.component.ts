import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import UsersJson from './users.json';

interface IAccount {
  accountNumber: string;
  bankName: string | null;
}

@Component({
  selector: 'app-add-favorite-account',
  templateUrl: './add-favorite-account.component.html',
  styleUrls: ['./add-favorite-account.component.scss'],
})
export class AddFavoriteAccountComponent implements OnInit {
  addAccountForm: FormGroup;
  submitted = false;
  bankNameValidationMessage = 'Bank name is required';
  title = 'Add favorite account';

  accountJson: IAccount[] = UsersJson;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    /**
     * Created the form group for Account form with validation
     */
    this.addAccountForm = this.formBuilder.group({
      accountName: ['', Validators.required],
      accountNumber: ['', [Validators.required, Validators.minLength(20)]],
      bankName: ['', Validators.required],
    });
  }

  /**
   * Fetch the account number and split the first 4 digits,
   * and then check whether that digit is available in the database or not.
   *  If present, then get and store the bank name.
   */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getAccountDetails() {
    const accValue = this.addAccountForm.value.accountNumber.slice(0, 4);
    this.accountJson.forEach((element) => {
      console.log('element', element);
      if (element.accountNumber == accValue) {
        this.addAccountForm.controls['bankName'].setValue(element.bankName);
      } else {
        this.bankNameValidationMessage =
          'Please enter a valid IBAN to display the bank name.';
      }
    });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get f() {
    return this.addAccountForm.controls;
  }

  /**
   * The functionality is to check if a form is validated or not.
   * If not, return the error. Otherwise, save the data in the database.
   * @returns
   */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  submitAccountDetails() {
    this.submitted = true;

    console.log('invalid', this.addAccountForm.invalid);
    // stop here if form is invalid
    if (this.addAccountForm.invalid) {
      return;
    } else {
      console.log('inside else');
      const storeAccountDetails = {
        accountNumber: this.addAccountForm.value.accountNumber,
        bankName: this.addAccountForm.value.bankName,
        id: this.accountJson.length + 1,
      };
      this.accountJson.push(storeAccountDetails);
      console.log('this.accountJson:=====', this.accountJson);
      this.clearData();
    }
  }

  /**
   * To clear the grid/form
   */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  clearData() {
    console.log('clearData');
    this.submitted = false;
    this.bankNameValidationMessage = 'Bank name is required';
    this.addAccountForm.reset();
  }
}
