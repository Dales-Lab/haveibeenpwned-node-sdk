import { haveIBeenPwned } from "../dist/haveibeenpwned";

// run with ts-node
haveIBeenPwned.CheckPassword('abc123').then(results => console.log(results));