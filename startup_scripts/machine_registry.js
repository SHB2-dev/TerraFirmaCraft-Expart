var Machines = ["electrolyzer", "arc_melter"]

MMEvents.registerControllers(event => {
    Machines.forEach((machine) => {
        event.create(`${machine}_controller`)
            .name(machine)
            .type("mm:machine");
    })
});

MMEvents.registerPorts(event => {
    event.create("simple_item_port")
        .name("Simple Item Port")
        .controllerId("mm:electrolyzer_controller")
        .config("mm:item", cfg => { cfg
            .rows(2)
            .columns(2);
    })
    event.create("simple_fluid_port")
        .name("Simple Fluid Port")
        .controllerId("mm:electrolyzer_controller")
        .config("mm:fluid", cfg => { cfg
            .rows(1)
            .columns(2)
            .slotCapacity(8000);
    })
    event.create("simple_energy_port")
        .name("Simple Energy Port")
        .controllerId("mm:electrolyzer_controller")
        .config("mm:energy", cfg => { cfg
            .capacity(16000)
            .maxReceive(512)
            .maxExtract(512);
    })
})