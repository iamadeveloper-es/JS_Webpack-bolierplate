import {helper} from './helpers/helper'

const h1Html = (mssg) => `<h1>${mssg}</h1>`
export function sayHi(){
    document.getElementById('app').innerHTML = h1Html('App Works!')
    helper('Helpers folder Works!')
}