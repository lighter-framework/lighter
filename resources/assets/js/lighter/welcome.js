import Debug from "./debug"

Debug.log('Lighter is on the line!')
console.log('%c ___       ___  ________  ___  ___  _________  _______   ________     \n' +
    '|\\  \\     |\\  \\|\\   ____\\|\\  \\|\\  \\|\\___   ___\\\\  ___ \\ |\\   __  \\    \n' +
    '\\ \\  \\    \\ \\  \\ \\  \\___|\\ \\  \\\\\\  \\|___ \\  \\_\\ \\   __/|\\ \\  \\|\\  \\   \n' +
    ' \\ \\  \\    \\ \\  \\ \\  \\  __\\ \\   __  \\   \\ \\  \\ \\ \\  \\_|/_\\ \\   _  _\\  \n' +
    '  \\ \\  \\____\\ \\  \\ \\  \\|\\  \\ \\  \\ \\  \\   \\ \\  \\ \\ \\  \\_|\\ \\ \\  \\\\  \\| \n' +
    '   \\ \\_______\\ \\__\\ \\_______\\ \\__\\ \\__\\   \\ \\__\\ \\ \\_______\\ \\__\\\\ _\\ \n' +
    '    \\|_______|\\|__|\\|_______|\\|__|\\|__|    \\|__|  \\|_______|\\|__|\\|__|\n' +
    '                                                                      ', 'color: #ff4000')
Debug.warning('You are running Lighter in local mode.')


const englishTips = [
    'Lighter.debug is a logger object for debug. Example: Lighter.debug.log("This is a log.");Lighter.debug.error("This is an error.");',
    'Lighter.Spark.sparks object has all sparks. Example: var Users = new Lighter.Spark("users"); console.log(Users === Lighter.Spark.sparks.Users);',
    'Give "/*Components here*/" comment to app.js and run "php artisan lighter:watch". watch command will auto check components folder and auto insert "Vue.component(...)" to after "/*Components here*/".',
    'If you want hide Lighter.debug logs. Open .env file and APP_ENV=local change to APP_ENV=staging.',
]

const japaneseTips = [
    'Lighter.debugオブジェクトはデバッグのためのロガーです。例：Lighter.debug.log("これはログです。");Lighter.debug.error("これはエラーです。");',
    'Lighter.Spark.sparksオブジェクトはすべてのSparkオブジェクトを所有しています。例：var Users = new Lighter.Spark("users"); console.log(Users === Lighter.Spark.sparks.Users);',
    'app.jsに"/*Components here*/"コメントを任意の場所に挿入してみてください。そして、"php artisan lighter:watch"を実行すればwatchコマンドによって自動的にcomponentsフォルダがチェックされ、新しいコンポーネントファイルが作成されたら自動的にapp.jsの"/*Components here*/"の後に"Vue.component(...)"が挿入されます。',
    'もしLighter.debugオブジェクトによるログを隠したい場合は.envファイルのAPP_ENV=localをAPP_ENV=stagingに変えてください。',
]

const tips = process.env.MIX_LIGHTER_TIPS_LANGUAGE == 'en' ? englishTips : japaneseTips
Debug.__log('Lighter tips:', tips[Math.floor(Math.random() * tips.length)], '#4527a0', '#673ab7')