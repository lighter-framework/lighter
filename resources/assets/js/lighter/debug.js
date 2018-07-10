const Debug = {
    __log(title, message, titleColor, messageColor){
        if(Laravel.isLocal === false) return
        console.log(
            `%c ${title} %c ${message} `,
            `padding: 1px; background-color: ${titleColor}; color: white;`,
            `padding: 1px; background-color: ${messageColor}; color: white;`,
        )
    },
    log(message)
    {
        this.__log('Lighter-debug:', message, '#1565c0', '#2196F3')
    },
    error(message)
    {
        console.error('Lighter-error: ' + message)
        this.__log('Lighter-error:', message, '#f44336', '#c62828')
        return false
    },
    warning(message)
    {
        this.__log('Lighter-warning:', message, '#ef6c00', '#ff9800')
    },
}

export default Debug