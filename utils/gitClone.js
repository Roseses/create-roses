import download from 'download-git-repo';
import { primary, error, success, warning } from './chalk.js';
import ora from 'ora';
import log from './log.js'
import { logo } from "../config/index.js";
import figlet from "./figlet.js";
import path from 'path'
import { copy, pathExistsSync, removeSync, PROCESS_PWD } from "./fs.js";
import prompts from 'prompts';
import { removePromptsList } from '../config/index.js'

export default (remote, name, option) => {
  return new Promise(async (resolve, reject) => {
    // 1. 检查模板名称是否已存在
    const dirPath = path.resolve(PROCESS_PWD, `./${name}`)
    const isExit = pathExistsSync(dirPath)
    // 2. 如果存在则询问是否删除, 不存在直接进入下一步
    if (isExit) {
      const result = await prompts(removePromptsList)
      if (result.delete) {
        removeSync(dirPath)
      } else {
        log('\n')
        console.log(warning('下载模板取消!!'))
        return
      }
    }
    // 3. 开始下载
    const downSpinner = ora('正在下载模板...').start();
    download(remote, name, option, (err) => {
      if (err) {
        downSpinner.fail();
        log(success(`\r\n`));
        log('err', error(err));
        reject(err);
        return;
      }
      log(success(`\r\n`));
      figlet(`Hello ${logo} !!`, function (err, data) {
        if (err) {
          downSpinner.succeed(success('模板下载成功！'));
          // log("Something went wrong...");
          // console.dir(err);
          return;
        }
        log(warning(data));
        log(success(`\r\n`));
        downSpinner.succeed(success('模板下载成功！'));
        log(success(`\r\n`));
        log(primary(`cd ${name}`));
        log(primary('pnpm install\n'));
        // console.log('pnpm run build:roses\r\n');
        // console.log('pnpm run roses:dev\r\n');
        resolve();
      });
    });
  });
};
