import type { Command } from "commander";

export function debugCommandWrapper(program:Command): Command {
    const options = program.opts();
    const args = program.args;
    const commands = program.commands;
    if(options.debug || options.d) {
        console.log("Debugging information:");
        console.log("Options:", options);
        console.log("Arguments:", args);
        console.log("Commands:", commands.map(cmd => cmd.name()));
    }
    return program
}