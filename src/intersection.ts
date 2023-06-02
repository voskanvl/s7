export default function intersection() {
    const anim1 = document.querySelector<SVGAElement>("#anim1")
    // const svg = document.querySelector<SVGAElement>("#anim1 svg")

    const cb: IntersectionObserverCallback = ([
        { isIntersecting },
    ]: IntersectionObserverEntry[]) => {
        console.log(isIntersecting)
        isIntersecting ? anim1?.setAttribute("inter", "inter") : anim1?.removeAttribute("inter")
    }

    const iso = new IntersectionObserver(cb, { threshold: [1] })
    anim1 && iso.observe(anim1)
}
