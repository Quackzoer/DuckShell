import { Command } from "commander";

export const program = new Command();

program
  .name('duck-shell')
  .description('Mallard-CLI: Commands storage, manager and execution tool')
  .option('-d, --debug', 'Enable debugging output')
  .version('1.0.0')
  .action(() => {
    console.log('Welcome to Mallard-CLI!');
  });