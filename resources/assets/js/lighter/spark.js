import alac from './alac'
import Debug from './debug'

function trySet (object, n, value) {
    var name = n
    while(object.hasOwnProperty(name))
    {
        name = '_' + name
    }
    object[name] = value
    return name
}

class Spark
{
    constructor(src)
    {
        this.src = src
        this.actions = {}
    }

    getModel(data)
    {
        var spark = this
        var model = Object.assign({}, data)
        var sourceName = trySet(model, 'source', Object.assign({}, data))
        trySet(model, 'save', () => {
            var reqData = {}
            Object.keys(model[sourceName])
                .forEach(key => {
                    reqData[key] = model[key]
                })
            return spark.request('update', reqData)
        })
        trySet(model, 'spark', this)

        Object.keys(this.actions)
            .forEach(key => {
                trySet(model, key, ()=>{
                    return spark.actions[key](model, ...arguments)
                })
            })

        return model
    }

    async getModelWithRequest(path, data, config = {})
    {
        var data = await this.request(path, data, config).then(alac.resultData)
        return this.getModel(data)
    }

    request(path, data, config = {})
    {
        return new Promise((resolve, reject) => {
            alac.post(this.src + '/' + path, data, config)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    Debug.error(error + '. See ↑ error.')
                    reject(error)
                })
        })
    }

    async getById(id)
    {
        return await this.getModelWithRequest('get', {id})
    }
}

export default Spark

