import './welcome'
import alac from './alac'
import debug from './debug'
import spark from './spark'

let Lighter = {}
Lighter.alac = alac
Lighter.debug = debug
Lighter.Spark = spark

window.LIGHTER_VERSION_STRING = '0.0.4'
window.LIGHTER_VERSION_NUMBER = 4

export default Lighter

export const Alac = alac
export const Debug = debug
export const Spark = spark