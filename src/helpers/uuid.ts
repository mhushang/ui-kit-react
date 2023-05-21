import crypto from 'crypto';

if (process.env.NODE_ENV === 'test') {
  Object.defineProperty(global, 'crypto', {
    value: {
      randomUUID: () => crypto.randomUUID(),
    },
  });
}

export const generateUUID = (): string => {
  let cryptoRef;
  let r: string | undefined = '';

  if (typeof self.crypto !== 'undefined') {
    cryptoRef = self.crypto;
    r = cryptoRef.randomUUID?.();
  }
  return r ? r : '';
};
