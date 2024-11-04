let MetalList = [["andesite_steel",0xB3BAB6],["shishenium",0x574BC9]]

StartupEvents.registry('fluid', event => {
    MetalList.forEach((material) => {
        console.log(`${material[0]},${material[1]}`)

        event.create(`shb2:${material[0]}`).thickTexture(material[1]).bucketColor(material[1])
    })
})

StartupEvents.registry('item', event => {
    MetalList.forEach((material) => {
        console.log(`shb2:item/metal/${material[0]}/ingot`)

        event.create(`shb2:${material[0]}_ingot`).texture(`shb2:item/metal/${material[0]}/ingot`).tag(`forge:ingots/${material[0]}`).tag('forge:ingots').tag(`tfc:metal_item/${material[0]}`).tag('tfc:pileable_ingots')
        event.create(`shb2:${material[0]}_double_ingot`).texture(`shb2:item/metal/${material[0]}/double_ingot`).tag(`forge:double_ingots/${material[0]}`).tag('forge:double_ingots').tag(`tfc:metal_item/${material[0]}`).tag('tfc:pileable_double_ingots')
        event.create(`shb2:${material[0]}_sheet`).texture(`shb2:item/metal/${material[0]}/sheet`).tag(`forge:sheets/${material[0]}`).tag('forge:sheets').tag(`tfc:metal_item/${material[0]}`).tag('tfc:pileable_sheets')
        event.create(`shb2:${material[0]}_double_sheet`).texture(`shb2:item/metal/${material[0]}/double_sheet`).tag(`forge:double_sheets/${material[0]}`).tag('forge:double_sheets').tag(`tfc:metal_item/${material[0]}`)
        event.create(`shb2:${material[0]}_rod`).texture(`shb2:item/metal/${material[0]}/rod`).tag(`forge:rods/${material[0]}`).tag('forge:rods').tag(`tfc:metal_item/${material[0]}`)
    })
})

StartupEvents.registry('block', event => {
    MetalList.forEach((material) => {
        event.create(`shb2:${material[0]}_block`).textureAll(`shb2:block/metal/block/${material[0]}`).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').hardness(2.5).stoneSoundType().requiresTool(true).tagBlock('tfc:metal_plated_blocks').tag(`tfc:metal_item/${material[0]}`)
    })
})