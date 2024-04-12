import css from './style.css'
import normalise from'./normalise.css'
import { homepage } from './hompage';
import { menupage } from './menu.js';
import { contactpage } from './contact.js';
const homeBtn = document.querySelector('.home')
const menuBtn = document.querySelector('.menu')
const contactBtn = document.querySelector('.contact')

homeBtn.addEventListener("click", ()=> homepage())
menuBtn.addEventListener("click", ()=> menupage())
contactBtn.addEventListener("click", ()=> contactpage())
window.addEventListener("DOMContentLoaded", ()=> homepage())
