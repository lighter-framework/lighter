import './welcome'
import alac from './alac'
import debug from './debug'
import spark from './spark'

let Lighter = {}
Lighter.alac = alac
Lighter.debug = debug
Lighter.Spark = spark

export default Lighter

export const Alac = alac
export const Debug = debug
export const Spark = spark