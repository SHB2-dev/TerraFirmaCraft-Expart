let DisabledMetalList = [["createaddition", "electrum"], ["createaddition", "copper"], ["create", "zinc"], ["create", "iron"], ["create", "copper"], ["create", "iron"], ["createaddition", "electrum"]]
var DisabledMekanismMetalList = ["steel","bronze","lead","uranium","tin"]
var DisabledIEMetalList = ["steel","silver","nickel","iron"]

JEIEvents.hideItems(event => {
    event.hide(`createaddition:brass_rod`)
    event.hide(`createaddition:iron_rod`)
    event.hide(`createaddition:copper_rod`)
    event.hide(`createaddition:gold_rod`)
    event.hide(`create:golden_sheet`)
    event.hide(`create:brass_ingot`)
    event.hide(`minecraft:copper_ingot`)
    event.hide(`minecraft:gold_ingot`)

    DisabledMetalList.forEach((material) => {
	    event.hide(`${material[0]}:${material[1]}_ingot`)
	    event.hide(`${material[0]}:${material[1]}_plate`)
	    event.hide(`${material[0]}:${material[1]}_sheet`)
	    event.hide(`${material[0]}:${material[1]}_nugget`)
	    event.hide(`${material[0]}:${material[1]}_rod`)
	    event.hide(`${material[0]}:${material[1]}_wire`)
    })

    DisabledMekanismMetalList.forEach((material) => {
	    event.hide(`mekanism:ingot_${material}`)
	    event.hide(`mekanism:nugget_${material}`)
	    event.hide(`mekanism:dust_${material}`)
	    event.hide(`mekanism:block_${material}`)
    })

    DisabledIEMetalList.forEach((material) => {
	    event.hide(`immersiveengineering:ingot_${material}`)
	    event.hide(`immersiveengineering:stick_${material}`)
    })
})