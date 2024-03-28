import { config } from 'dotenv-safe';
import { add } from '@src/math/add';

config();

console.log('hbsoft');
console.log(add(1, 2));
