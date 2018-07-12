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
        Spark.sparks[src.charAt(0).toUpperCase() + src.slice(1)] = this
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
        trySet(model, 'delete', () => {
            return spark.request('delete', {id: model.id})
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

    async all()
    {
        var spark = this
        var models = []
        var records = await this.request('all').then(alac.resultData)

        records.forEach(record => {
            models.push(spark.getModel(record))
        })

        return models
    }

    async create(data, path = 'create')
    {
        var sendData = {}

        if (typeof data != 'object') return Debug.error('Data argument must been object.').with(false)

        Object
            .keys(data)
            .forEach(key => {
                Debug.log(key, data)
                if(typeof data[key] == 'function')
                {
                    sendData[key] = data[key]()
                }
                else
                {
                    sendData[key] = data[key]
                }
            })

        return await this.request(path, sendData)
    }
}

Spark.sparks = {}

export default Spark

