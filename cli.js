import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import gitClone from './utils/gitClone.js';
import fileClone from './utils/fileClone.js';
import prompts from 'prompts';
import { readFile } from 'fs/promises';
import { optionDefinitions, helpSections, remoteList, promptsOptions } from './config/index.js'

const pkg = JSON.parse(
  await readFile(new URL('./package.json', import.meta.url))
);

const options = commandLineArgs(optionDefinitions);

const getUserInfo = async () => {
  const res = await prompts(promptsOptions);
  // type: 1---模块, 2 --- 项目
  if (res.type === 1) {
    if (!res.fileTemplate) return
    fileClone(res.fileTemplate)
  } else {
    if (!res.name || !res.template) return;
    gitClone(`direct:${remoteList[res.template]}`, res.name, { clone: true });
  }
};
const runOptions = () => {
  if (options.version) {
    console.log(`v${pkg.version}`);
    return;
  }
  if (options.help) {
    console.log(commandLineUsage(helpSections));
    return;
  }
  getUserInfo();
};

runOptions();
