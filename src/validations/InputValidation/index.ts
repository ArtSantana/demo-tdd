export class InputValidation {
  static validateEmail(email: string): boolean {
    const regexValidation =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return regexValidation.test(email);
  }
}
