import { haveIBeenPwned } from "../lib/haveibeenpwned";
import { expect } from 'chai';
import 'mocha';

describe('Check produces correct results', () => { 
  
  it('abc123 is found in the database', () => {
    haveIBeenPwned.CheckPassword('abc123').then((results) => {
      expect(results).to.be.equal(true)
    });    
  })

  it('Password1 is found in the database', () => {
    haveIBeenPwned.CheckPassword('Password1').then((results) => {
      expect(results).to.be.equal(true)
    });    
  })

  it('password is found in the database', () => {
    haveIBeenPwned.CheckPassword('Password1').then((results) => {
      expect(results).to.be.equal(true)
    });    
  })

  it('A super long and silly password is not found', () => {
    haveIBeenPwned.CheckPassword('fsljkfdsalk;jdsafmldsvmkldsabjm;ldsab;jklmbds;jmkdjk;md5906u0954u6043mu5b06mbd0jb0thb0rt0m').then((results) => {
      expect(results).to.be.equal(false)
    });   
  })

  it('Not actually providing a password is silly', () => {
    haveIBeenPwned.CheckPassword('').then((results) => {
      expect(results).to.be.equal(false)
    });   
  }) 
});

