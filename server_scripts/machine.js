MMEvents.createStructures(event => {
    event.create("mm:electrolyzer")
        .controllerId("mm:electrolyzer_controller")
        .name("Electrolyzer")
        .layout(struct => {struct.layer([
            "TT   TT",
            "TT   TT",
            "       "
        ]).layer([
            "TTHHHTT",
            "TTPTPTT",
            "HH   HH"
        ]).layer([
            "TTHEHTT",
            "TTHTHTT",
            "BB   BB"
        ]).layer([
            "HHHHHHH",
            "UHHHHHO",
            "HHNCIHH"
        ])
                .key("U", { block: "mm:simple_fluid_port_output"})
                .key("N", { block: "mm:simple_fluid_port_input"})
                .key("H", { block: "create:copper_casing"})
                .key("I", { block: "mm:simple_item_port_input"})
                .key("O", { block: "mm:simple_item_port_output"})
                .key("T", { block: "create:fluid_tank"})
                .key("P", { block: "create:fluid_pipe"})
                .key("B", { block: "immersiveengineering:coil_lv"})
                .key("E", { block: "mm:simple_energy_port_input"})
        })
})

MMEvents.createStructures(event => {
    event.create("mm:arc_melter")
        .controllerId("mm:arc_melter_controller")
        .name("Arc Melter")
        .layout(struct => {struct.layer([
                "     ",
                "  H  ",
                " HNH ",
                "  H  ",
                "     "
            ]).layer([
                "  H  ",
                " TTT ",
                "HTTTH",
                " TTT ",
                "  H  "
            ]).layer([
                "  H  ",
                " TTT ",
                "HTTTH",
                " TTT ",
                "  H  "
            ]).layer([
                " SSS ",
                "STTTS",
                "STTTS",
                "STTTS",
                " ISU "
            ]).layer([
                " BBB ",
                "BTTTB",
                "BTTTB",
                "BTTTB",
                " BBB "
            ]).layer([
                " SES ",
                "STTTS",
                "STTTS",
                "STTTS",
                " SCS "
            ])
                .key("U", { block: "mm:simple_fluid_port_output"})
                .key("N", { block: "mm:simple_fluid_port_input"})
                .key("H", { block: "tfc:metal/block/black_steel"})
                .key("S", { block: "tfc:metal/block/steel"})
                .key("I", { block: "mm:simple_item_port_input"})
                .key("T", { block: "create:fluid_tank"})
                .key("B", { block: "immersiveengineering:coil_hv"})
                .key("E", { block: "mm:simple_energy_port_input"})
        })
})