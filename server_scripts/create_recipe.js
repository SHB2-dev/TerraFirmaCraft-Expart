var WireMetal = ["copper", "electrum", "aluminum", "steel", "lead"]

ServerEvents.recipes(event => {
    event.remove({output:"create:andesite_casing"})
    event.remove({output:"create:copper_casing"})
    event.remove({output:"create:brass_casing"})

    event.remove({id:"tfc_ie_addon:heating/ore/normal_bauxite"})
    event.remove({id:"tfc_ie_addon:heating/ore/poor_bauxite"})
    event.remove({id:"tfc_ie_addon:heating/ore/rich_bauxite"})
    event.remove({id:"tfc_ie_addon:heating/ore/small_bauxite"})
    event.remove({id:"create:pressing/iron_ingot"})
    event.remove({id:"create:pressing/copper_ingot"})
    event.remove({id:"create:pressing/gold_ingot"})
    event.remove({id:"createaddition:pressing/electrum_ingot"})
    event.remove({id:"minecraft:blaze_powder"})
    event.remove({id:"immersiveengineering:crafting/cokebrick"})
    event.remove({id:"create:crafting/kinetics/encased_fan"})
    event.remove({id:"create:crafting/kinetics/propeller"})
    event.remove({id:"create:crafting/kinetics/wrench"})
    event.remove({id:"create:pressing/gold_ingot"})
    event.remove({id:"create:crafting/materials/sand_paper"})
    event.remove({id:"create:crafting/materials/red_sand_paper"})
    event.remove({id:"createaddition:compat/mekanism/rose_quartz_enriching"})
    event.remove({id:"createaddition:filling/treated_wood_planks"})
    event.remove({id:"createaddition:crafting/modular_accumulator_gold"})
    event.remove({id:"createaddition:crafting/modular_accumulator_electrum"})
    event.remove({id:"createaddition:crafting/capacitor_1"})
    event.remove({id:"createaddition:crafting/capacitor_2"})
    event.remove({id:"create:mechanical_crafting/crushing_wheel"})
    event.remove({id:"create:crafting/kinetics/fluid_pipe_vertical"})
    event.remove({id:"create:crafting/kinetics/fluid_pipe"})
    event.remove({id:"create:crafting/kinetics/shaft"})
    event.remove({id:"create:crafting/materials/andesite_alloy"})
    event.remove({id:"create:crafting/materials/andesite_alloy_from_zinc"})
    event.remove({id:"create:crafting/materials/andesite_alloy_from_block"})
    event.remove({id:"create:mixing/andesite_alloy"})
    event.remove({id:"create:mixing/andesite_alloy_from_zinc"})

    event.remove({type:"createaddition:rolling"})
    event.remove({type:"create:compacting"})
    event.remove({type:"create:sandpaper_polishing"})

    event.recipes.create.pressing(['immersiveengineering:plate_iron'], ['tfc:metal/ingot/wrought_iron'])
    event.recipes.create.pressing(['immersiveengineering:plate_copper'], ['tfc:metal/ingot/copper'])
    event.recipes.create.pressing(['immersiveengineering:plate_gold'], ['tfc:metal/ingot/gold'])
    event.recipes.create.pressing(['immersiveengineering:plate_electrum'], ['immersiveengineering:ingot_electrum'])

    event.recipes.create.mixing([Fluid.of('shb2:sodium_aluminate_solution', 1000)], [Fluid.of('tfc:river_water', 500), '5x tfc_ie_addon:powder/bauxite', '1x shb2:sodium_hydroxide']).heated()
    event.recipes.create.compacting([Fluid.of('shb2:aluminum_hydroxide', 250), 'minecraft:paper'], [Fluid.of('shb2:sodium_aluminate_solution', 1000), 'minecraft:paper'])
    event.recipes.create.mixing([Fluid.of('shb2:alumina_solution', 1000)], [Fluid.of('shb2:aluminum_hydroxide', 1000), 'tfc:ore/cryolite']).heated()

    event.recipes.create.mixing(['3x immersiveengineering:cokebrick'], [Fluid.of('tfc:metal/wrought_iron', 100), 'tfc:fire_bricks', '3x minecraft:brick'])
    
    event.recipes.create.compacting(['4x shb2:galvanized_plate'], ['tfc:metal/sheet/steel', 'tfc:metal/sheet/zinc'])
    event.recipes.create.compacting(['2x createaddition:capacitor'], ['tfc:metal/sheet/zinc', 'tfc:metal/sheet/copper', '3x tfc:powder/graphite'])
    
    event.recipes.create.compacting(['minecraft:blaze_rod'], ['tfc:metal/rod/brass', '8x minecraft:blaze_powder'])
    event.recipes.create.filling(['minecraft:blaze_powder'], [Fluid.of('minecraft:lava', 125), 'tfc:powder/charcoal'])
    event.recipes.create.filling(['shb2:electron_base'], [Fluid.of('tfc_ie_addon:metal/electrum', 50), 'tfc:metal/sheet/wrought_iron'])
    event.recipes.create.filling(['4x create:fluid_pipe'], [Fluid.of('tfc:metal/copper', 100), 'tfc:metal/sheet/copper'])

    event.recipes.create.compacting(['create:empty_blaze_burner'], ['#forge:magma_block', 'tfc:metal/double_sheet/black_steel']).heated()
    event.recipes.create.compacting(['create:blaze_burner'], ['create:empty_blaze_burner', '4x minecraft:blaze_rod']).heated()
    event.recipes.tfc.welding('create:empty_blaze_burner', '#forge:magma_block', 'tfc:metal/double_sheet/black_steel', 5)
    event.recipes.tfc.welding('create:wrench', 'tfc:metal/rod/gold', 'shb2:andesite_steel_sheet', 4)
    event.recipes.tfc.welding('3x create:fluid_pipe', 'tfc:metal/sheet/copper', 'tfc:metal/ingot/copper', 4)
    event.recipes.create.compacting(['create:electron_tube'], ['shb2:electron_base', 'shb2:rose_quartz_tube'])

    event.recipes.create.compacting(['minecraft:obsidian'], [Fluid.of('minecraft:lava', 1000), Fluid.of('tfc:river_water', 1000), '#forge:cobblestone'])
    event.recipes.create.compacting(['minecraft:obsidian'], [Fluid.of('minecraft:lava', 1000), Fluid.of('tfc:salt_water', 1000), '#forge:cobblestone'])

    event.recipes.tfc.anvil(Item.of('create:shaft', 2), 
      'shb2:andesite_steel_rod', ['draw_last', 'bend_second_last', 'hit_third_last']).tier(4)

    event.recipes.tfc.glassworking('shb2:rose_quartz_tube', 'create:rose_quartz', ['blow', 'blow', 'pinch', 'roll', 'saw'])
    
    event.recipes.create.mixing([Fluid.of('mekanism:hydrogen_chloride', 1000)], [Fluid.of('mekanism:hydrogen', 1000), Fluid.of('mekanism:chlorine', 1000)]).heated()
    event.recipes.create.mixing([Fluid.of('shb2:hydrochloric_acid', 2000)], [Fluid.of('mekanism:hydrogen_chloride', 1000), Fluid.of('tfc:river_water', 1000)])
    event.recipes.create.mixing([Fluid.of('shb2:hypochlorite_water', 2000)], [Fluid.of('tfc:river_water', 1000), Fluid.of('mekanism:chlorine', 1000), '1x shb2:sodium_hydroxide'])
    event.recipes.create.mixing([Fluid.of('shb2:bleach', 1000)], [Fluid.of('tfc:river_water', 1000), Fluid.of('shb2:hypochlorite_water', 10)])
    event.recipes.create.mixing([Fluid.of('shb2:disinfectant', 1000)], [Fluid.of('tfc:river_water', 1000), Fluid.of('shb2:hypochlorous_acid_water', 10)])

    event.shaped('create:blaze_burner', [
      'RRR',
      'RER',
      'RRR'
      ], {
        E: 'create:empty_blaze_burner',
        R: 'minecraft:blaze_rod',
      }
    )
    event.shaped('createaddition:modular_accumulator', [
      ' R ',
      'CHC',
      'SWS'
      ], {
        R: 'tfc:metal/rod/rose_gold',
        C: 'createaddition:capacitor',
        H: 'create:brass_casing',
        S: 'tfc:metal/sheet/red_steel',
        W: 'immersiveengineering:coil_mv'
      }
    )
    event.recipes.create.mechanical_crafting('2x create:crushing_wheel', [
      ' IBI ',
      'IBWBI',
      'BWSWB',
      'IBWBI',
      ' IBI '
    ], {
        S: '#tfc:rock/bricks',
        W: 'immersiveengineering:treated_wood_horizontal',
        B: 'shb2:andesite_steel_block',
        I: 'shb2:andesite_steel_ingot'
    })

    event.custom(
        {
            "type": "create:item_application",
            "ingredients": [
              {
                "item": "shb2:andesite_steel_block"
              },
              {
                "tag": "tfc:lumber"
              }
            ],
            "results": [
              {
                "item": "create:andesite_casing"
              }
            ]
        }
    )
    event.custom(
        {
            "type": "create:item_application",
            "ingredients": [
              {
                "item": "tfc:metal/block/copper"
              },
              {
                "item": "shb2:galvanized_plate"
              }
            ],
            "results": [
              {
                "item": "create:copper_casing"
              }
            ]
        }
    )
    event.custom(
        {
            "type": "create:item_application",
            "ingredients": [
              {
                "item": "tfc:metal/block/brass"
              },
              {
                "item": "tfc_ie_addon:treated_wood_lumber"
              }
            ],
            "results": [
              {
                "item": "create:brass_casing"
              }
            ]
        }
    )
    WireMetal.forEach((material) => {
      event.custom(
        {
            "type": "createaddition:rolling",
            "ingredients": [
              {
                "tag": `forge:rods/${material}`
              }
            ],
            "results": [
              {
                "item": `immersiveengineering:wire_${material}`, "count": 1
              }
            ]
        }
      )
    })
})