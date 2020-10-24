export class Validator {
  public static readonly validUsernameRegex = /[a-zA-Z0-9_]{1,16}$/;

  /**
   * RegeEx username validation
   *
   * `true` if username is valid and
   * `false` if username is invalid
   */
  public static readonly validateUsername = (name: string): boolean => {
    if (Validator.validUsernameRegex.test(name) === false) {
      return false;
    }
    return true;
  };
}

export default Validator;
