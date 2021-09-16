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
