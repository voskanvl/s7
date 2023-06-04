export default function intersection() {
    const elementsToAnimate = [
        document.querySelector<SVGAElement>("#anim1 > svg"),
        document.querySelector<SVGAElement>(".facts__title > .circled > svg"),
    ]

    const cb: IntersectionObserverCallback = ([
        { isIntersecting, target },
    ]: IntersectionObserverEntry[]) => {
        setTimeout(() => {
            isIntersecting ? target.setAttribute("inter", "inter") : target.removeAttribute("inter")
        }, 600)
    }

    const iso = new IntersectionObserver(cb, { threshold: [1] })
    elementsToAnimate.forEach(e => e && iso.observe(e))
}
