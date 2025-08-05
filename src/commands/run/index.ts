import type { Command } from "commander";

export const runCommand = ((command: Command) => {
    
    command
        .command('run')
        .action(() => {
            console.log("Running the command: run");
        });
})