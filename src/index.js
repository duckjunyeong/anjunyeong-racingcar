import { checkWordCount } from "./wordTester.js";

const $userNamesForm =document.querySelector('#car-names-form');

$userNamesForm.addEventListener('submit', checkWordCount)


