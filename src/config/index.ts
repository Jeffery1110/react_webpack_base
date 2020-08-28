import localConf from './local';
import devConf from './dev';
import prodConf from './prod';

const config = env === 'dev' ? devConf : env === 'prod' ? prodConf : localConf;

export default config;
