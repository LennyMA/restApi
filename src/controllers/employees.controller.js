import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      req.params.id,
    ]);
    //aqui ponemos una condicion, para saber si lo que buscamos esta vacio o no, como rows me devuelve varios datos, si es 0 significa que no hay datos ingresado
    //por lo tanto mandamos un mensaje de respuesta con res y el estado (status)
    if (rows.length <= 0) {
      return res.status(404).json({
        message: "Empleado no encontrado",
      });
    }
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong", //mensaje para el cliente
    });
  }
};

export const createEmployee = async (req, res) => {
  const { name, salary } = req.body; //capturamos los datos enviados, en este caso, solo name y body para poder pasar como parametros
  try {
    const [rows] = await pool.query(
      "INSERT INTO employee (name, salary) VALUES (?, ?)",
      [name, salary]
    ); //aqui ya estamos mandando el query para el insert que corresponde a sql
    res.send({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      id,
    ]);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows <= 0) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
