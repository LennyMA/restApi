import { Router } from 'express' //importamos el module Router que tiene express, para poder crear rutas 
import { getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee } from '../controllers/employees.controller.js'

const router = Router()

router.get('/empleados', getEmployees)
router.get('/empleados/:id', getEmployee) //cuando me pasen /empleados deben pasarme un id, para buscar un solo dato
router.post('/empleados', createEmployee)
router.patch('/empleados/:id', updateEmployee) //si se van a actualizar todos los campos es mejor utilizar put, sino, patch, ya que patch te permite actualizar solo ciertos campos que se desee
router.delete('/empleados/:id', deleteEmployee)

export default router //cuando ocupamos un export default se puedee importar con cualquier nombre