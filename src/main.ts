import "./sass/style.sass"
import "@splidejs/splide/css"
import Splide, { Options } from "@splidejs/splide"

const slider1 = new Splide("#slider1", {
    type: "loop",
    pagination: true,
    arrows: true,
})
slider1.mount()
