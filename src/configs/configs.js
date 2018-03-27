const isProductionEnvironment = false;
const isQAEnvironment = false;
const isDevelopmentEnvironment = true;

const production_api = ''
const qa_api = ''
const development_api = 'https://www.mocky.io/v2'

export const apiPath = isDevelopmentEnvironment ? 
    development_api : isQAEnvironment ? 
        qa_api : production_api
