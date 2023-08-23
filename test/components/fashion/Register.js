const faker = require('faker');

class Register {

    constructor() {
        this._password = '$pWd0' + faker.internet.password(8);
    }

    // -- User form payload --
    get userForm() {
        return ('//*[@id="layout-container"]/div')
    }
    get firstName() {
        return {
            field: '//*[@id="layout-container"]/div/entry-create-personal-form/form/div[2]/peb-form-background/div/two-column-form/div/peb-form-field-input[1]/div/div',
            answer: faker.name.firstName()
        }
    }
    get lastName() {
        return {
            field: '//*[@id="layout-container"]/div/entry-create-personal-form/form/div[2]/peb-form-background/div/two-column-form/div/peb-form-field-input[2]/div/div',
            answer: faker.name.lastName()
        }
    }
    get email() {
        return {
            field: '//*[@id="layout-container"]/div/entry-create-personal-form/form/div[2]/peb-form-background/div/peb-form-field-input[1]/div/div',
            answer: faker.internet.email()
        }
    }
    get password() {

        return {
            field: '//*[@id="layout-container"]/div/entry-create-personal-form/form/div[2]/peb-form-background/div/peb-form-field-input[2]/div/div',
            answer: this._password
        }
    }
    get passwordConfirmation() {
        return {
            field: '//*[@id="layout-container"]/div/entry-create-personal-form/form/div[2]/peb-form-background/div/peb-form-field-input[3]/div/div',
            answer: this._password
        }
    }
    get signUpButton() {
        return ('//*[@id="layout-container"]/div/entry-create-personal-form/form/div[2]/button[1]')
    }

    // -- Bussiness form payload --
    get businessForm() {
        return ('//*[@id="layout-container"]/div/entry-default-business-registration/entry-create-business-form/form')
    }
    get company() {
        return {
            field: '//*[@id="layout-container"]/div/entry-default-business-registration/entry-create-business-form/form/peb-form-background/div/peb-form-field-input/div/div/span',
            answer: faker.company.companyName()
        }
    }
    get businessType() {
        return {
            field: '//*[@id="layout-container"]/div/entry-default-business-registration/entry-create-business-form/form/peb-form-background/div/peb-select[1]/div/div',
            choice: '/html/body/div[5]/div[2]/div/div/peb-select-option[2]'
        }
    }
    get businessStatus() {
        return {
            field: '//*[@id="layout-container"]/div/entry-default-business-registration/entry-create-business-form/form/peb-form-background/div/peb-select[2]/div/div',
            choice: '/html/body/div[5]/div[2]/div/div/peb-select-option[3]'
        }
    }
    get businessSales() {
        return {
            field: '//*[@id="layout-container"]/div/entry-default-business-registration/entry-create-business-form/form/peb-form-background/div/peb-select[3]/div/div',
            choice: '/html/body/div[5]/div[2]/div/div/peb-select-option[3]'
        }
    }
    get businessIndustry() {
        return {
            field: '//*[@id="layout-container"]/div/entry-default-business-registration/entry-create-business-form/form/peb-form-background/div/pe-autocomplete/div/peb-form-field-input/div/div[1]',
            choice: '//*[@id="mat-option-6"]'
        }
    }
    get phoneNumber() {
        return {
            countryCodeField: '//*[@id="layout-container"]/div/entry-default-business-registration/entry-create-business-form/form/peb-form-background/div/two-column-form/div/peb-select/div/div/div[1]',
            choice: '//*[@id="cdk-overlay-4"]/div/peb-select-option[4]',
            phoneNumberField: '/html/body/app-root/app-lazy/entry-registration/entry-business-registration/entry-layout/div/div/div/entry-default-business-registration/entry-create-business-form/form/peb-form-background/div/two-column-form/div/peb-form-field-input/div/div/span',
            phoneNumber: faker.phone.phoneNumber()
        }
    }
    get registerButton() {
        return ('//*[@id="layout-container"]/div/entry-default-business-registration/button/pe-progress-button-content/div')
    }
}

module.exports = Register;