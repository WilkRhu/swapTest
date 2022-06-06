import dotenv from "dotenv"


dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
  })
  
export const App = {
    port: process.env.PORT,
    git: process.env.GIT_HUB_REPO,
    webhook: process.env.WEB_HOOK,
    urlDatabase: process.env.DATA_BASE,
    timeout: 1*60*1000
}