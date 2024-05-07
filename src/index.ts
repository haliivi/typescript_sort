import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection: NumbersCollection = new NumbersCollection([3, -3])
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);
