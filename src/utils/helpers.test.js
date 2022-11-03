import React from 'react';
import { convertAsterisk, transformHyperlink } from './helpers';

describe('convertAsterisk()', () => {
  const noAsterisk = 'String with no asterisk';
  const singleAsterisk = 'String with single *asterisk';
  const multipleAsterisks = 'String *with *multiple *asterisks';

  it('returns original string if it does not contain asterisks', () => {
    expect(convertAsterisk(noAsterisk, '\n')).toEqual(noAsterisk);
  });

  it('replaces asterisks with empty string (no whitespace) if no separator provided', () => {
    expect(convertAsterisk(multipleAsterisks)).toEqual(
      'String with multiple asterisks'
    );
  });

  it('replaces asterisks with the provided separator', () => {
    expect(convertAsterisk(singleAsterisk, '\n')).toEqual(
      'String with single \nasterisk'
    );
    expect(convertAsterisk(singleAsterisk, '<br>')).toEqual(
      'String with single <br>asterisk'
    );
    expect(convertAsterisk(singleAsterisk, true)).toEqual(
      'String with single trueasterisk'
    );
    expect(convertAsterisk(singleAsterisk, NaN)).toEqual(
      'String with single NaNasterisk'
    );
    expect(convertAsterisk(singleAsterisk, undefined)).toEqual(
      'String with single asterisk'
    );
    expect(convertAsterisk(multipleAsterisks, null)).toEqual(
      'String nullwith nullmultiple nullasterisks'
    );
  });
});
