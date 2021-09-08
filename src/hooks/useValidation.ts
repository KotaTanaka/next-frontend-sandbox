import { ValidationRule, Validator } from '@/@types/components';

/** バリデーションフック */
const useValidation = () => {
  /**
   * 入力値にバリデーションを適用してエラーリストを取り出す
   * @param rules バリデーションルールリスト
   * @param value 入力値
   * @returns {string[]} エラーリスト
   */
  const convertRulesToErrors = (
    rules: ValidationRule[],
    value: string | number,
  ): string[] => {
    return rules
      .map((rule): ReturnType<Validator> => {
        if (rule === 'required') {
          return String(value).length > 0 || '必須項目です';
        } else {
          return true;
        }
      })
      .filter((error): error is string => error !== true);
  };

  return {
    convertRulesToErrors,
  };
};

export default useValidation;
