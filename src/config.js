import { config } from 'dotenv' //importamos el modulo dotenv

config()
export const PORT = process.env.PORT || 3000 //creamos una constante y le ponemos export para poder importar, en caso de que no encuentre la variable, nosotros le asignamos
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'LM1010:v'
export const DB_DATABASE = process.env.DB_DATABASE || 'companydb'
export const DB_PORT = process.env.DB_PORT || 3306
//PORT es del servidor
//DB_PORT es de la base de datos

// console.log(process.env.PORT)
// console.log(process.env.DB_HOST)
// console.log(process.env.DB_USER)
// console.log(process.env.DB_PASSWORD)
// console.log(process.env.DB_DATABASE)