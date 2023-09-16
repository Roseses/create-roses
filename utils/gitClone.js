import download from 'download-git-repo';
import { primary, error, success, warning } from './chalk.js';
import ora from 'ora';
import log from './log.js'
import { logo } from "../config/index.js";
import figlet from "./figlet.js";

export default (remote, name, option) => {
  const downSpinner = ora('正在下载模板...').start();
  return new Promise((resolve, reject) => {
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
