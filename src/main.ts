import "./sass/style.sass"
import "@splidejs/splide/css"
import { Splide, Options } from "@splidejs/splide"
import intersection from "./intersection.ts"

const options: Options = {
    type: "loop",
    pagination: true,
    arrows: true,
    easing: "linear",
}

const slider1 = new Splide("#slider1", options)
slider1.mount()

const slider2 = new Splide("#slider2", options)
slider2.mount()

intersection()

//--- change arrows ---

const leftButtons = document.querySelectorAll<HTMLElement>(".splide__arrow.splide__arrow--prev")
const rightButtons = document.querySelectorAll<HTMLElement>(".splide__arrow.splide__arrow--next")
leftButtons &&
    leftButtons.forEach(e => {
        e.innerHTML = `<img src="../assets/icons/arrow-left.png" alt="arrow - left">`
    })
rightButtons &&
    rightButtons.forEach(e => {
        e.innerHTML = `<img src="../assets/icons/arrow-right.png" alt="arrow - right">`
    })

// <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M1 21L11 11L1 1" stroke="#54565A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
