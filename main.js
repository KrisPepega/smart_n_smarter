import data from "./classes.json" assert { type: 'json' }

class stat_calculator {
    class = "N/A"
    selected_perks = { sel_perk_1: "N/A", sel_perk_2: "N/A", sel_perk_3: "N/A", sel_perk_4: "N/A" }

    set_class(input) {
        this.class = input
        this.populate_perks()
    }

    populate_perks() {
        let perk_selectors = document.querySelectorAll("select.perk")
        for (let i = 0; i < perk_selectors.length; i++) {
            data.classes.forEach((e1) => {
                if (e1.name === this.class) {
                    e1.perks.forEach((e2) => {
                        let opt = document.createElement("option")
                        opt.value = e2.name
                        opt.text = e2.name
                        opt.disabled = false
                        perk_selectors[i].appendChild(opt)
                    })
                }
            })
        }
    }

    disable_perk(current_sel, perk) {
        let prev_perk = this.selected_perks[current_sel]
        let perk_selectors = document.querySelectorAll("select.perk")
        for (let i = 0; i < perk_selectors.length; i++) {
            if (perk_selectors[i].id !== current_sel) {
                if (prev_perk !== "N/A") {
                    perk_selectors[i].querySelector(`option[value="${prev_perk}"]`).disabled = false
                }
                perk_selectors[i].querySelector(`option[value="${perk}"]`).disabled = true
            }
        }
        this.selected_perks[current_sel] = perk
        console.log(this.selected_perks)
    }


}

const stat_calc = new stat_calculator

document.getElementById("sel_class").addEventListener("change", () => { stat_calc.set_class(document.getElementById("sel_class").value, false) })

let perk_selectors = document.querySelectorAll("select.perk")
for (let i = 0; i < perk_selectors.length; i++) {
    perk_selectors[i].addEventListener("change", () => { stat_calc.disable_perk(perk_selectors[i].id, perk_selectors[i].value) }, false)
}