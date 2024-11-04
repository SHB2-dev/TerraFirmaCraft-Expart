ServerEvents.recipes(event => {
  event.remove({id:"tfc_ie_addon:anvil/wirecutter_head"})
  event.remove({id:"tfc_ie_addon:crafting/ersatz_leather"})
  event.remove({id:"immersiveengineering:crafting/ersatz_leather"})
  event.recipes.tfc.anvil(Item.of('tfc_ie_addon:tool_head/wirecutter'), 
      'tfc_ie_addon:metal/sheet/aluminum', ['hit_last', 'shrink_not_last', 'bend_not_last']).tier(6)
})