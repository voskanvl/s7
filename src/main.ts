import "./sass/style.sass"
import "@splidejs/splide/css"
import Splide, { Options } from "@splidejs/splide"
import intersection from "./intersection"

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
