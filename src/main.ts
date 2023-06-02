import "./sass/style.sass"
import "@splidejs/splide/css"
import Splide, { Options } from "@splidejs/splide"
import intersection from "./intersection"

const slider1 = new Splide("#slider1", {
    type: "loop",
    pagination: true,
    arrows: true,
})
slider1.mount()

const slider2 = new Splide("#slider2", {
    type: "loop",
    pagination: true,
    arrows: true,
})
slider2.mount()

intersection()
