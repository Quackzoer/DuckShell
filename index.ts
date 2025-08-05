import { program } from 'commander';
import { runCommand } from './src/commands/run/index.js';
import { debugCommandWrapper } from './src/utils/debug.js';



runCommand(program);

program.parse();

debugCommandWrapper(program);


export const globalOptions = program.opts();
export const globalArgs = program.args;
export const globalCommands = program.commands;

if ((Object.keys(globalOptions).length === 0 || globalArgs.length === 0) && globalCommands.length === 0) {
  console.log("No options, arguments, or commands provided. Use --help to see available options.");
}

process.on('uncaughtException', (error: unknown) => {
  if (error instanceof Error && error.name === 'ExitPromptError') {
    console.log('👋 until next time!');
  } else {
    // Rethrow unknown errors
    throw error;
  }
});