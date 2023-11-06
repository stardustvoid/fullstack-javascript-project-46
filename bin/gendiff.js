#!/usr/bin/env node

import { Command } from 'commander';
import gendiff from '../src/gendiff.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.1')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action(gendiff);

program.parse();
