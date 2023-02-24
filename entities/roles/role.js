const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema de roles
const roleSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
},
  permissions: [{
    type: String
}],
});

// Definir el modelo de roles
const Role = mongoose.model('Role', roleSchema);

// Crear los roles de administrador y usuario
const adminRole = new Role({
  name: 'admin',
  permissions: ['create', 'read', 'update', 'delete'],
});

const userRole = new Role({
  name: 'user',
  permissions: ['read', 'delete'],
});

// Guardar los roles en la base de datos
Promise.all([
  adminRole.save(),
  userRole.save(),
])
.then(() => console.log('Roles creados exitosamente'))
.catch(err => console.error(err));
