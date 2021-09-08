/** バリデーション関数 */
export type Validator = (value: string | number) => true | string;

/** バリデーションルール */
export type ValidationRule = 'required';
