import { wordList } from './words';

class PasswordGenerator {
  readonly passwordLength: number = 12;

  constructor(length: number) {
    this.passwordLength = length;
  }

  public generatePassword(): string {
    let password = '';

    for (let i = 0; i < this.passwordLength; i++) {
      password += this.generateRandomCharacter();
    }

    return password;
  }

  private generateRandomCharacter(): string {
    const characters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const randomCharacter = this.getRandomItem(characters);

    if (Math.random() > 0.5) {
      return randomCharacter.toUpperCase();
    }

    return randomCharacter;
  }

  protected getRandomItem(array: string[]): string {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
}

class ReadablePasswordGenerator extends PasswordGenerator {
  constructor(length: number) {
    super(length);
  } 

  private generateRandomWord() : string {
    return this.getRandomItem(wordList);
  }

  public generatePassword() : string {
    let password = '';
    
    while (password.length < this.passwordLength) {
      if (password.length > 0) {
        password += '-';
      }
      password += this.generateRandomWord();
    }

    return password;
  }
}


const myPasswordGenerator = new PasswordGenerator(30);
const password = myPasswordGenerator.generatePassword();

console.log(`
Generated password:
${password}
`);

const myReadablePasswordGenerator = new ReadablePasswordGenerator(30);
const readablePassword = myReadablePasswordGenerator.generatePassword();
console.log(`
Generated readable password:
${readablePassword}
`);


