import dayjs, { Dayjs } from 'dayjs';
import { ParsedUrlQuery } from 'querystring';

/**
 * idを含むURLパラメータからidを取得する
 * @param {ParsedUrlQuery} query
 * @returns {string} id
 */
export const getIdFromParsedUrlQuery = (query: ParsedUrlQuery): string => {
  const { id } = query;

  return Array.isArray(id) ? id[0] : id;
};

/**
 * 金額を日本円形式に変換する
 * @param price 金額
 * @returns {string} 日本円形式の金額
 */
export const toPrice = (price: number) => {
  return `¥${price.toLocaleString()}`;
};

/**
 * 日付を年月日形式に変換する
 * @param date 任意のフォーマットの日付
 * @returns {string} 年月日形式の日付
 */
export const toJPDate = (date: string | number | Date | Dayjs) => {
  return dayjs(date).format('YYYY年M月D日');
};
