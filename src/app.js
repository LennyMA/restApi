import express from 'express' //importamos el framework express
import employeesRoutes from './routes/employees.routes.js' //importamos las clases creadas de las rutas
import indexRoutes from './routes/index.routes.js'

const app = express() //guardamos en una variable constante
app.use(express.json()) //primero esto ya que permitira pasar objetos JSON 

app.use('/api/', employeesRoutes)
app.use(indexRoutes)

//para controlar cuando ingresen una ruta que no exista
app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})
export default app