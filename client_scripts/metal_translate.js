let MetalList = [["andesite_steel","Andesite Steel","安山岩鋼"],["shishenium","Shishenium","シシェニウム"]]

ClientEvents.lang('ja_jp', event => {
        MetalList.forEach((material) => {
            event.renameItem(`shb2:${material[0]}_ingot`, `${material[2]}のインゴット`)
            event.renameItem(`shb2:${material[0]}_double_ingot`, `${material[2]}のダブルインゴット`)
            event.renameItem(`shb2:${material[0]}_sheet`, `${material[2]}のシート`)
            event.renameBlock(`shb2:${material[0]}_block`, `${material[2]}メッキブロック`)
            event.renameBlock(`shb2:${material[0]}_rod`, `${material[2]}の棒`)
    })
})

ClientEvents.lang('en_us', event => {
        MetalList.forEach((material) => {
            event.renameItem(`shb2:${material[0]}_ingot`, `${material[1]} Ingot`)
            event.renameItem(`shb2:${material[0]}_double_ingot`, `${material[1]} Double Ingot`)
            event.renameItem(`shb2:${material[0]}_sheet`, `${material[1]} Sheet`)
            event.renameBlock(`shb2:${material[0]}_rod`, `${material[1]} Rod`)
    })
})