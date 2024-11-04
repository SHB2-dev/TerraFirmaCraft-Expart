StartupEvents.registry('fluid', event => {
    event.create('shb2:andesitic_lava').thickTexture(0xff8324).bucketColor(0xff8324)
    event.create('shb2:sodium_aluminate_solution').thickTexture(0xed8866).bucketColor(0xed8866)
    event.create('shb2:aluminum_hydroxide').thickTexture(0xc2bbb0).bucketColor(0xc2bbb0)
    event.create('shb2:alumina_solution').thickTexture(0xdedede).bucketColor(0xdedede)
    event.create('shb2:hydrochloric_acid').thinTexture(0x80e0cf).bucketColor(0x80e0cf)
    event.create('shb2:hypochlorous_acid_water').thinTexture(0x4ba2a3).bucketColor(0x4ba2a3)
    event.create('shb2:hypochlorite_water').thinTexture(0x92b56b).bucketColor(0x92b56b)
    event.create('shb2:bleach').thinTexture(0xc6cfbc).bucketColor(0xc6cfbc)
    event.create('shb2:disinfectant').thinTexture(0xbccfc9).bucketColor(0xbccfc9)
})

StartupEvents.registry('item', event => {
    event.create('shb2:sodium_hydroxide').texture('shb2:item/sodium_hydroxide')
    event.create('shb2:galvanized_plate').texture('shb2:item/galvanized_plate')
    event.create('shb2:rose_quartz_tube').texture('shb2:item/rose_quartz_tube')
    event.create('shb2:electron_base').texture('shb2:item/electron_base')
    event.create(`shb2:electrum_rod`).texture(`shb2:item/metal/electrum/rod`).tag(`forge:rods/electrum`).tag('forge:rods').tag(`tfc:metal_item/electrum`)
    event.create(`shb2:lead_rod`).texture(`shb2:item/metal/lead/rod`).tag(`forge:rods/lead`).tag('forge:rods').tag(`tfc:metal_item/lead`)
    event.create('shb2:ingot_mold', 'create:sequenced_assembly').texture('shb2:item/ingot_mold')
    event.create('shb2:fire_ingot_mold', 'create:sequenced_assembly').texture('shb2:item/fire_ingot_mold')
})

StartupEvents.registry('block', event => {
    event.create(`shb2:compost_block`).textureAll(`shb2:block/compost_block`).tagBlock('minecraft:mineable/shovel').hardness(2).gravelSoundType()
})