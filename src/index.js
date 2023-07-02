import app from './app.js' //llamamos a app que tiene todas las configuracions de express
import { PORT } from './config.js'

app.listen(PORT) //definimos en que puerto va a estar escuchando
//para produccion debemos hacer las configuraciones y de ahi importar el puerto
console.log("Ejecutandoce en el puerto ", PORT)

//aqui es donde arranca todo
//en push.yml van los jobs, para ello se crea una carpeta .github/workflows para usar en github