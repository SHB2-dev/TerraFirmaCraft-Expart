let MetalList = [["andesite_steel", 2, 1000, 1350, 1450, 4, 0.008],["shishenium", 5, 1250, 1540, 1500, 6, 0.004]]
// ["名前", 熱容量(温度の上がりにくさ), 鍛造可能温度, 溶接可能温度, 融点, 金床のティア, 特定熱容量]

var MetalListTFC = ["bismuth", "bismuth_bronze", "black_bronze", "bronze", "brass", "copper", "gold", "nickel", "rose_gold", "silver", "tin", "zinc", "sterling_silver", "wrought_iron", "cast_iron", "steel", "black_steel", "red_steel", "blue_steel", "pig_iron", "weak_steel", "weak_red_steel", "weak_blue_steel", "high_carbon_steel", "high_carbon_black_steel", "high_carbon_red_steel", "high_carbon_blue_steel", "unknown"]
var MetalListForgableTFC = ["bismuth", "bismuth_bronze", "black_bronze", "bronze", "brass", "copper", "gold", "nickel", "rose_gold", "silver", "tin", "zinc", "sterling_silver", "wrought_iron", "cast_iron", "steel", "black_steel", "red_steel", "blue_steel"]
var MetalListFL = ["chromium", "stainless_steel"]
var MetalListIE = ["electrum", "constantan", "aluminum", "lead", "uranium"]
               
MetalList.forEach((material) => {
    TFCEvents.data(event => {
        event.itemHeat(`shb2:${material[0]}_ingot`, material[1], material[2], material[3])
        event.itemHeat(`shb2:${material[0]}_double_ingot`, material[1], material[2], material[3])
        event.itemHeat(`shb2:${material[0]}_sheet`, material[1], material[2], material[3])
        event.metal(`shb2:${material[0]}`, material[4], material[6], `shb2:${material[0]}_ingot`, `shb2:${material[0]}_double_ingot`, `shb2:${material[0]}_sheet`, material[5], `shb2:${material[0]}`)
    })

    ServerEvents.recipes(event => {

        event.shaped(`8x shb2:${material[0]}_block`, [
            ' SH',
            'SPS',
            ' S '
            ], {
                S: `shb2:${material[0]}_sheet`,
                P: '#minecraft:planks',
                H: '#tfc:hammers'
            }
        )

        event.recipes.tfc.heating(`shb2:${material[0]}_ingot`, material[4])
            .resultFluid(Fluid.of(`shb2:${material[0]}`, 100))

        event.recipes.tfc.heating(`shb2:${material[0]}_double_ingot`, material[4])
            .resultFluid(Fluid.of(`shb2:${material[0]}`, 200))

        event.recipes.tfc.heating(`shb2:${material[0]}_sheet`, material[4])
            .resultFluid(Fluid.of(`shb2:${material[0]}`, 200))
            
        event.recipes.tfc.heating(`shb2:${material[0]}_block`, material[4])
            .resultFluid(Fluid.of(`shb2:${material[0]}`, 100))
            
        event.recipes.tfc.heating(`shb2:${material[0]}_double_sheet`, material[4])
            .resultFluid(Fluid.of(`shb2:${material[0]}`, 400))

        event.recipes.tfc.welding(`shb2:${material[0]}_double_ingot`,
            `shb2:${material[0]}_ingot`, `shb2:${material[0]}_ingot`, material[5])
            
        event.recipes.tfc.welding(`shb2:${material[0]}_double_sheet`,
            `shb2:${material[0]}_sheet`, `shb2:${material[0]}_sheet`, material[5])

        event.recipes.tfc.anvil(`shb2:${material[0]}_sheet`, 
            `shb2:${material[0]}_double_ingot`, ['hit_last', 'hit_second_last', 'hit_third_last']).tier(material[5])
            
        event.recipes.tfc.anvil(Item.of(`shb2:${material[0]}_rod`, 2), 
            `shb2:${material[0]}_ingot`, ['bend_last', 'draw_second_last', 'draw_third_last']).tier(material[5])

        event.recipes.tfc.casting(`shb2:${material[0]}_ingot`,
            'tfc:ceramic/ingot_mold', TFC.fluidStackIngredient(`shb2:${material[0]}`, 100), 0.1)
            
        event.recipes.tfc.casting(`shb2:${material[0]}_ingot`,
            'tfc:ceramic/fire_ingot_mold', TFC.fluidStackIngredient(`shb2:${material[0]}`, 100), 0.01)

        event.recipes.create.compacting(`shb2:${material[0]}_double_ingot`, [`2x shb2:${material[0]}_ingot`, 'tfc:powder/flux']).heated()
        
        event.recipes.create.compacting(`shb2:${material[0]}_double_sheet`, [`2x shb2:${material[0]}_sheet`, 'tfc:powder/flux']).heated()

        event.recipes.create.sequenced_assembly([
            `shb2:${material[0]}_ingot`
        ], 'tfc:ceramic/ingot_mold', [
            event.recipes.create.filling(Item.of('shb2:ingot_mold'), [Fluid.of(`shb2:${material[0]}`, 100), 'shb2:ingot_mold']),
            event.recipes.createDeploying(['shb2:ingot_mold', Item.of('tfc:ceramic/ingot_mold').withChance(0.9)], ['shb2:ingot_mold', 'minecraft:paper']).keepHeldItem()
        ]).transitionalItem('shb2:ingot_mold')

        event.recipes.create.sequenced_assembly([
            `shb2:${material[0]}_ingot`
        ], 'tfc:ceramic/fire_ingot_mold', [
            event.recipes.create.filling(Item.of('shb2:ingot_mold'), [Fluid.of(`shb2:${material[0]}`, 100), 'shb2:ingot_mold']),
            event.recipes.createDeploying(['shb2:ingot_mold', Item.of('tfc:ceramic/fire_ingot_mold').withChance(0.99)], ['shb2:ingot_mold', 'minecraft:paper']).keepHeldItem()
        ]).transitionalItem('shb2:ingot_mold')
    })
})

MetalListTFC.forEach((material) => {
    ServerEvents.recipes(event => {
        event.recipes.create.sequenced_assembly([
            `tfc:metal/ingot/${material[0]}`
        ], 'tfc:ceramic/ingot_mold', [
            event.recipes.create.filling(Item.of('shb2:ingot_mold'), [Fluid.of(`tfc:metal/${material[0]}`, 100), 'shb2:ingot_mold']),
            event.recipes.createDeploying(['shb2:ingot_mold', Item.of('tfc:ceramic/ingot_mold').withChance(0.9)], ['shb2:ingot_mold', 'minecraft:paper']).keepHeldItem()
        ]).transitionalItem('shb2:ingot_mold')
        
        event.recipes.create.sequenced_assembly([
            `tfc:metal/ingot/${material[0]}`
        ], 'tfc:ceramic/fire_ingot_mold', [
            event.recipes.create.filling(Item.of('shb2:ingot_mold'), [Fluid.of(`tfc:metal/${material[0]}`, 100), 'shb2:ingot_mold']),
            event.recipes.createDeploying(['shb2:ingot_mold', Item.of('tfc:ceramic/fire_ingot_mold').withChance(0.99)], ['shb2:ingot_mold', 'minecraft:paper']).keepHeldItem()
        ]).transitionalItem('shb2:ingot_mold')
    })
})

MetalListForgableTFC.forEach((material) => {
    ServerEvents.recipes(event => {
        event.recipes.create.compacting(`tfc:metal/double_ingot/${material}`, [`2x tfc:metal/ingot/${material}`, 'tfc:powder/flux']).heated()

        event.recipes.create.compacting(`tfc:metal/double_sheet/${material}`, [`2x tfc:metal/sheet/${material}`, 'tfc:powder/flux']).heated()
    })
})

MetalListIE.forEach((material) => {
    ServerEvents.recipes(event => {
        event.recipes.create.sequenced_assembly([
            `immersiveengineering:ingot_${material[0]}`
        ], 'tfc:ceramic/ingot_mold', [
            event.recipes.create.filling(Item.of('shb2:ingot_mold'), [Fluid.of(`tfc_ie_addon:metal/${material[0]}`, 100), 'shb2:ingot_mold']),
            event.recipes.createDeploying(['shb2:ingot_mold', Item.of('tfc:ceramic/ingot_mold').withChance(0.9)], ['shb2:ingot_mold', 'minecraft:paper']).keepHeldItem()
        ]).transitionalItem('shb2:ingot_mold')
        
        event.recipes.create.sequenced_assembly([
            `immersiveengineering:ingot_${material[0]}`
        ], 'tfc:ceramic/fire_ingot_mold', [
            event.recipes.create.filling(Item.of('shb2:ingot_mold'), [Fluid.of(`tfc_ie_addon:metal/${material[0]}`, 100), 'shb2:ingot_mold']),
            event.recipes.createDeploying(['shb2:ingot_mold', Item.of('tfc:ceramic/fire_ingot_mold').withChance(0.99)], ['shb2:ingot_mold', 'minecraft:paper']).keepHeldItem()
        ]).transitionalItem('shb2:ingot_mold')
            
        event.recipes.create.compacting(`tfc_ie_addon:metal/double_ingot/${material}`, [`2x immersiveengineering:ingot_${material}`, 'tfc:powder/flux']).heated()
    })
})

MetalListFL.forEach((material) => {
    ServerEvents.recipes(event => {
        event.recipes.create.sequenced_assembly([
            `firmalife:metal/ingot${material[0]}`
        ], 'tfc:ceramic/ingot_mold', [
            event.recipes.create.filling(Item.of('shb2:ingot_mold'), [Fluid.of(`firmalife:metal/${material[0]}`, 100), 'shb2:ingot_mold']),
            event.recipes.createDeploying(['shb2:ingot_mold', Item.of('tfc:ceramic/ingot_mold').withChance(0.9)], ['shb2:ingot_mold', 'minecraft:paper']).keepHeldItem()
        ]).transitionalItem('shb2:ingot_mold')
        
        event.recipes.create.sequenced_assembly([
            `firmalife:metal/ingot${material[0]}`
        ], 'tfc:ceramic/fire_ingot_mold', [
            event.recipes.create.filling(Item.of('shb2:ingot_mold'), [Fluid.of(`firmalife:metal/${material[0]}`, 100), 'shb2:ingot_mold']),
            event.recipes.createDeploying(['shb2:ingot_mold', Item.of('tfc:ceramic/fire_ingot_mold').withChance(0.99)], ['shb2:ingot_mold', 'minecraft:paper']).keepHeldItem()
        ]).transitionalItem('shb2:ingot_mold')
            
        event.recipes.create.compacting(`firmalife:metal/double_ingot/${material}`, [`2x firmalife:metal/ingot/${material}`, 'tfc:powder/flux']).heated()

        event.recipes.create.compacting(`firmalife:metal/double_sheet/${material}`, [`2x firmalife:metal/sheet/${material}`, 'tfc:powder/flux']).heated()
    })
})