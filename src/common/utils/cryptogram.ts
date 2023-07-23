// password-encryption.js
import * as crypto from 'crypto';

type KeyEnv = 'PASSWORD_KEY';

/**
 * @description: 加密数据
 * @param {string} data  需要加密的数据
 * @param {KeyEnv} key  加密的key
 */
export const decryptData = (data: string, key?: KeyEnv) => {
  const hash = crypto.createHash('md5');
  hash.update(data);
  return hash.digest('hex');
};

export const encryptData = (encryptedData: string, key: KeyEnv) => {
  const secretKey = Buffer.from(process.env[key], 'hex');
  const iv = Buffer.from(encryptedData.slice(0, 32), 'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', secretKey, iv);
  let decrypted = decipher.update(encryptedData.slice(32), 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};
