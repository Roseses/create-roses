import { log } from '../utils/log.js';
import { promptsOptions } from '../config/index.js'
import prompts from 'prompts'

(async () => {
    const response = await prompts(promptsOptions);
    log(response, '-------------------- 回答结果')
  })();