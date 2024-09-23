import { describe, expect, it } from 'vitest';
import { isValidPassword } from '../src/main.js';

describe('suite name', () => {
  it('should return true for a valid password', () => {
    const password = 'Pass1234_';
    expect(isValidPassword(password)).toBe(true);
  });

  it('should return false if password has less than 8 characters', () => {
    const password = 'Pass1';
    expect(isValidPassword(password)).toBe(false);
  });

  it('should return false if password do not contain at least one uppercase letter', () => {
    const password = 'pass12345';
    expect(isValidPassword(password)).toBe(false);
  });

  it('should return false if password do not contain at least one lowercase letter', () => {
    const password = 'PASS12345';
    expect(isValidPassword(password)).toBe(false);
  });

  it('should return false if password do not contain at least one number', () => {
    const password = 'Passwords';
    expect(isValidPassword(password)).toBe(false);
  });

  it('should return false if password do not contain at least one underscore', () => {
    const password = 'Pass12345';
    expect(isValidPassword(password)).toBe(false);
  });
});
