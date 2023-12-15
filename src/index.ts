import { subtle } from 'xcross';

export interface Options {
  algorithm?: AlgorithmIdentifier | 'SHA-512' | 'SHA-384' | 'SHA-256' | 'SHA-1';
  serializer?: (input: unknown) => string;
}

export const defaultSerializer = (input: unknown) => {
  if (typeof input !== 'object' || input === null) {
    if (typeof input === "bigint") {
      return JSON.stringify({ ___bigint: input.toString() });
    }
    return JSON.stringify(input);
  }
  if (input instanceof Date) {
    return JSON.stringify({ ___date: input });
  }
  if (Array.isArray(input)) {
    return JSON.stringify({ ___array: input });
  }
  if (ArrayBuffer.isView(input)) {
    return JSON.stringify({ [`___${Object.prototype.toString.call(input)}`]: input });
  }
  const keys = Object.keys(input).sort();
  const sortedObj: Record<string, string> = {};
  keys.forEach(key => {
    sortedObj[key] = defaultSerializer((input as Record<string, unknown>)[key]);
  });
  return JSON.stringify({ [`___${Object.prototype.toString.call(input)}`]: sortedObj });
};

export const createHash = ({ algorithm = 'SHA-256', serializer = defaultSerializer }: Options = {}) => {
  const encoder = new TextEncoder();
  return async (input: unknown) => {
    const serialized = serializer(input);
    const data = encoder.encode(serialized);
    const hashBuffer = await subtle.digest(algorithm, data);
    const hashArray = new Uint32Array(hashBuffer);

    return [...hashArray].map((b) => b.toString(16).padStart(Uint32Array.BYTES_PER_ELEMENT * 2, '0')).join('');
  };
};
