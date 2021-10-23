import { InputValidation } from '.';

describe('InputValidation class', () => {
  test('Validate invalid email', () => {
    expect(InputValidation.validateEmail('xurimpurimpula@asdasd')).toBeFalsy();
  });

  test('Validate valid email', () => {
    expect(
      InputValidation.validateEmail('chapulin@chespirito.com')
    ).toBeTruthy();
  });
});
