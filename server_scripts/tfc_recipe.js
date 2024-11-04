TFCEvents.data(event => {

    event.itemHeat(`tfc:rock/raw/andesite`, 2, null, null)
    event.itemHeat(`tfc:rock/cobble/andesite`, 2, null, null)
    event.itemHeat(`tfc:rock/gravel/andesite`, 2, null, null)
    event.itemHeat(`tfc:rock/loose/andesite`, 2, null, null)
    event.itemHeat(`tfc:rock/mossy_loose/andesite`, 2, null, null)
    event.itemHeat('#forge:magma_block', 3, null, 1200)

    event.metal('shb2:andesitic_lava', 1500, 0.008, null, null, null, 3, 'shb2:andesitic_lava')
})

ServerEvents.recipes(event => {

    event.shapeless('minecraft:bucket', [
        'tfc:metal/bucket/blue_steel',
        'tfc:metal/bucket/red_steel'
    ])
    
    event.recipes.tfc.heating(`tfc:rock/raw/andesite`, 1350)
        .resultFluid(Fluid.of(`shb2:andesitic_lava`, 100))
        
    event.recipes.tfc.heating(`tfc:rock/hardened/andesite`, 1350)
        .resultFluid(Fluid.of(`shb2:andesitic_lava`, 100))

    event.recipes.tfc.heating(`tfc:rock/cobble/andesite`, 1350)
        .resultFluid(Fluid.of(`shb2:andesitic_lava`, 100))
        
    event.recipes.tfc.heating(`tfc:rock/gravel/andesite`, 1350)
        .resultFluid(Fluid.of(`shb2:andesitic_lava`, 50))
        
    event.recipes.tfc.heating(`tfc:rock/loose/andesite`, 1350)
        .resultFluid(Fluid.of(`shb2:andesitic_lava`, 25))
        
    event.recipes.tfc.heating(`tfc:rock/mossy_loose/andesite`, 1350)
        .resultFluid(Fluid.of(`shb2:andesitic_lava`, 25))
        
    event.recipes.tfc.heating('tfc:rock/magma/granite', 1350)
        .resultFluid(Fluid.of(`minecraft:lava`, 500))
    event.recipes.tfc.heating('tfc:rock/magma/diorite', 1350)
        .resultFluid(Fluid.of(`minecraft:lava`, 500))
    event.recipes.tfc.heating('tfc:rock/magma/gabbro', 1350)
        .resultFluid(Fluid.of(`minecraft:lava`, 500))
    event.recipes.tfc.heating('tfc:rock/magma/rhyolite', 1350)
        .resultFluid(Fluid.of(`minecraft:lava`, 500))
    event.recipes.tfc.heating('tfc:rock/magma/basalt', 1350)
        .resultFluid(Fluid.of(`minecraft:lava`, 500))
    event.recipes.tfc.heating('tfc:rock/magma/andesite', 1350)
        .resultFluid(Fluid.of(`minecraft:lava`, 500))
    event.recipes.tfc.heating('tfc:rock/magma/dacite', 1350)
        .resultFluid(Fluid.of(`minecraft:lava`, 500))

    event.recipes.tfc.alloy('shb2:andesite_steel', [
        TFC.alloyPart('shb2:andesitic_lava', 0.3, 0.35),
        TFC.alloyPart('tfc:zinc', 0.08, 0.12),
        TFC.alloyPart('tfc:steel', 0.5, 0.6)
    ])
    
    event.recipes.tfc.alloy('shb2:shishenium', [
        TFC.alloyPart('tfc:black_steel', 0.2, 0.3),
        TFC.alloyPart('tfc:red_steel', 0.2, 0.3),
        TFC.alloyPart('tfc:blue_steel', 0.45, 0.55)
    ])
})