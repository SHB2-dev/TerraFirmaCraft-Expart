var MetalList = ["andesite_steel","shishenium"]
let DisabledMetalList = [["createaddition", "electrum"], ["createaddition", "copper"], ["create", "zinc"], ["create", "iron"], ["create", "copper"], ["create", "iron"], ["createaddition", "electrum"]]
var DisabledMekanismMetalList = ["steel","bronze","lead","uranium","tin"]
var DisabledIEMetalList = ["steel","silver","nickel","iron"]

MetalList.forEach((material) => {
    ServerEvents.tags('fluid', event => {
        event.add('tfc:usable_in_ingot_mold', `shb2:${material}`)
        event.add('tfc:molten_metals', `shb2:${material}`)
    })
})

ServerEvents.tags('item', event => {

    event.add('forge:magma_block', 'tfc:rock/magma/granite')
    event.add('forge:magma_block', 'tfc:rock/magma/diorite')
    event.add('forge:magma_block', 'tfc:rock/magma/gabbro')
    event.add('forge:magma_block', 'tfc:rock/magma/rhyolite')
    event.add('forge:magma_block', 'tfc:rock/magma/basalt')
    event.add('forge:magma_block', 'tfc:rock/magma/andesite')
    event.add('forge:magma_block', 'tfc:rock/magma/dacite')
    
    event.add('create:sandpaper', 'tfc:sandpaper')

    event.remove(`forge:ingots/brass`, `create:brass_ingot`)
    event.remove(`forge:ingots`, `create:brass_ingot`)
    
    event.remove(`forge:ingots/copper`, `minecraft:copper_ingot`)
    event.remove(`forge:ingots`, `minecraft:copper_ingot`)
    
    event.remove(`forge:ingots/gold`, `minecraft:gold_ingot`)
    event.remove(`forge:ingots`, `minecraft:gold_ingot`)
    
    event.remove(`forge:plates/gold`, `create:golden_sheet`)
    event.remove(`forge:plates`, `create:golden_sheet`)

    event.remove(`forge:rods/brass`, `createaddition:brass_rod`)
    event.remove(`forge:rods`, `createaddition:brass_rod`)
    event.remove(`forge:rods/all_metal`, `createaddition:brass_rod`)

    event.remove(`forge:rods/gold`, `createaddition:gold_rod`)
    event.remove(`forge:rods`, `createaddition:gold_rod`)
    event.remove(`forge:rods/all_metal`, `createaddition:gold_rod`)

    event.remove(`forge:rods/iron`, `createaddition:iron_rod`)
    event.remove(`forge:rods`, `createaddition:iron_rod`)
    event.remove(`forge:rods/all_metal`, `createaddition:iron_rod`)

    DisabledMetalList.forEach((material) => {
        event.remove(`forge:ingots/${material[1]}`, `${material[0]}:${material[1]}_ingot`)
        event.remove(`forge:plates/${material[1]}`, `${material[0]}:${material[1]}_plate`)
        event.remove(`forge:plates/${material[1]}`, `${material[0]}:${material[1]}_sheet`)
        event.remove(`forge:nuggets/${material[1]}`, `${material[0]}:${material[1]}_nugget`)
        event.remove(`forge:rods/${material[1]}`, `${material[0]}:${material[1]}_rod`)
        event.remove(`forge:wires/${material[1]}`, `${material[0]}:${material[1]}_wire`)

        event.remove(`forge:ingots`, `${material[0]}:${material[1]}_ingot`)
        event.remove(`forge:plates`, `${material[0]}:${material[1]}_plate`)
        event.remove(`forge:plates`, `${material[0]}:${material[1]}_sheet`)
        event.remove(`forge:nuggets/`, `${material[0]}:${material[1]}_nugget`)
        event.remove(`forge:rods`, `${material[0]}:${material[1]}_rod`)
        event.remove(`forge:wires`, `${material[0]}:${material[1]}_wire`)
        
        event.remove(`forge:rods/all_metal`, `${material[0]}:${material[1]}_rod`)
        event.remove(`forge:wires/all_metal`, `${material[0]}:${material[1]}_wire`)
        
    })

    DisabledMekanismMetalList.forEach((material) => {
        event.remove(`forge:ingots/${material}`, `mekanism:ingot_${material}`)
        event.remove(`forge:ingots`, `mekanism:ingot_${material}`)
        event.remove(`forge:nuggets/${material}`, `mekanism:nugget_${material}`)
        event.remove(`forge:nuggets`, `mekanism:nugget_${material}`)
        event.remove(`forge:dusts/${material}`, `mekanism:dust_${material}`)
        event.remove(`forge:dusts`, `mekanism:dust_${material}`)
        event.remove(`forge:storage_blocks/${material}`, `mekanism:block_${material}`)
        event.remove(`forge:storage_blocks`, `mekanism:block_${material}`)
    })
    
    DisabledIEMetalList.forEach((material) => {
        event.remove(`forge:ingots/${material}`, `immersiveengineering:ingot_${material}`)
        event.remove(`forge:ingots`, `immersiveengineering:ingot_${material}`)
        event.remove(`forge:rods/${material}`, `immersiveengineering:stick_${material}`)
        event.remove(`forge:rods`, `immersiveengineering:stick_${material}`)
    })
})