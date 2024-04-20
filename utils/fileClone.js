import { primary, error, success, warning } from './chalk.js';
import ora from 'ora';
import log from './log.js'
import { logo } from "../config/index.js";
import figlet from "./figlet.js";
import path from 'path'
import { copy, pathExistsSync, removeSync, PROCESS_PWD } from "./fs.js";
import prompts from 'prompts';
import { removePromptsList } from '../config/index.js'
import { __dirname } from './path.js';

export default (name) => {
  return new Promise(async (resolve, reject) => {
    // 1. 检查模块名称是否已存在
    const dirPath = path.resolve(PROCESS_PWD, `./${name}`)
    const isExit = pathExistsSync(dirPath)
    // 2. 如果存在则询问是否删除, 不存在直接进入下一步
    if (isExit) {
      const result = await prompts(removePromptsList)
      if (result.delete) {
        removeSync(dirPath)
      } else {
        log('\n')
        console.log(warning('下载模块取消!!'))
        return
      }
    }
    // 3. 开始下载
    const templatePath = path.resolve(__dirname, `../template/file/${name}`)
    const downSpinner = ora('正在下载模块...').start();
    copy(templatePath, dirPath, (err) => {
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
          downSpinner.succeed(error('模块下载失败！'));
          return;
        }
        log(warning(data));
        log(success(`\r\n`));
        downSpinner.succeed(success('模块下载成功！'));
        log(success(`\r\n`));
        resolve();
      });
    });
  });
};
