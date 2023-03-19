# Backend proyecto e-commerce

### En este proyecto he hecho una API y he creado una base de datos en Atlas para hacer una tienda on-line de palas de pádel.

## Tecnologías y Lenguajes

![Captura de pantalla 2023-03-18 233340](https://user-images.githubusercontent.com/112971504/226147575-f98bc83d-9065-4c4f-b86f-fb8439c5a9c9.png)

## Colecciones.

- Usuarios.
- Palas.
- Ventas.
- Marcas.
- Roles.
- Estados de la pala.


## Middleares.

- auth. Servirá para que usuarios registrados y admin puedan usar la app. Ya sea para hacer compras o gestiones por parte del admin.
- isAdmin. Tendrá control total sobre la app y sus colecciones. Podrá borrar, actualizar y crear ya sea palas, marcas etc.


## Endpoints.

#### Usuarios.

- router.get('/', auth, isAdmin, UsersController.getAllUsers);
En este endpoint, el admin,  al logearse primero y acceder con el token podrá ver todos los usuarios registrados en la app.

- router.post("/", UsersController.newUser);
Este es el endpoint para poder registrarse a la app. Se van a pedir por body los campos referentes al modelo de users.

- router.put("/", auth, isAdmin, UsersController.updateUser);
En este endpoint el admin podría actualizar datos de los usuarios registrados. Se va a mandar un JSON del id del usuario a modificar junto con los datos del usuario ya modificados.

- router.delete("/", auth, isAdmin, UsersController.deleteUser);
Este endpoint sirve para borrar ususarios. Aquí el admin tras poner el token podrá borrar usuarios tras poner el id (por body) del usuario a borrar.

- router.post("/login", UsersController.loginUser);
En éste endpoint por body vamos a pedir el email y la contraseña del usuario para poder logearnos a la app.

#### Palas.

- router.get('/', RacketsController.getAllRackets);
Este endpoint sirve para traernos todas las palas de la base de datos.

- router.get("/model/:model", RacketsController.getRacketByModel);
Este, para buscar por path params por modelo de la pala. Será el endpoint de la barra de búsqueda.

- router.post("/", auth, isAdmin, RacketsController.newRacket);
En éste, el admin tras logearse y poner el token podría añadir nuevas palas a la base de datos. Por body se pasarian los datos de la pala a crear.

- router.put("/", auth, isAdmin, RacketsController.updateRacket);
Aqui el admin podría actualizar los datos de la pala.

- router.delete("/", auth, isAdmin,RacketsController.deleteRacket);
Endpoint para borrar palas. El admin tras logearse y poner el token, pasando por body en formato JSON el id de la pala a borrar, ésta se borrará.

#### Ventas.

- router.get("/getAll", auth, isAdmin, SalesController.getAllSales);
En este endpoint, el admin, al logearse y poner el token podrá ver todas las ventas registradas en la app.

- router.get("/userSales/:id", auth, SalesController.getUserSales);
En éste, el usuario podrá ser capaz de ver sus compras en la app. (tendrá que estar logeado para ello)

- router.post("/newSale", auth,  SalesController.newSale);
En este, un usuario  registrado podrá registrar una venta. Por body se van a pasar el id del usuario, el id de la pala comprada, la fecha y el precio de dicha pala.

#### Marcas. 

- router.get('/', auth, isAdmin, BrandsController.getAllBrands);
En este endpoint, el admin, al logearse y poner el token podrá ver todas las marcas registradas en la app.

- router.post("/", auth, isAdmin, BrandsController.newBrand);
En este, el admin tras logearse y poner el token podrá añadir nuevas marcas a la app. Por body se pasaran los datos de la marca a crear.

- router.put("/", auth, isAdmin, BrandsController.updateBrand);
En este, el admin tras logearse y poner el token podrá actualizar los datos de la marca. Por body se pasaran los datos de la marca a actualizar.

- router.delete("/", auth, isAdmin, BrandsController.deleteBrand);
En este, el admin tras logearse y poner el token podrá borrar marcas. Por body se pasara el id de la marca a borrar.

#### Estados de la pala.

- router.get('/', auth, isAdmin, StatesController.getAllStates);
En este endpoint, el admin, al logearse y poner el token podrá ver todos los estados de la pala.

- router.post("/", auth, isAdmin, StatesController.newState);
En este, el admin tras logearse y poner el token podrá añadir nuevos estados a la pala. Por body se pasaran los datos de la pala a crear.

- router.put("/", auth, isAdmin, StatesController.updateState);
En este, el admin tras logearse y poner el token podrá actualizar los datos del estado de la pala. Por body se pasaran los datos del estado a actualizar.

- router.delete("/", auth, isAdmin, StatesController.deleteState);
En este, el admin tras logearse y poner el token podrá borrar estados. Por body se pasara el id del estado a borrar.

#### Roles.

- router.get('/', auth, isAdmin, RolesController.getAllRoles);
En este endpoint, el admin, al logearse y poner el token podrá ver todos los roles de la app.

- router.post("/", auth, isAdmin, RolesController.newRole);
En este, el admin tras logearse y poner el token podrá añadir nuevos roles a la app. Por body se pasaran los datos del rol a crear.

- router.put("/", auth, isAdmin, RolesController.updateRole);
En este, el admin tras logearse y poner el token podrá actualizar los datos del rol. Por body se pasaran los datos del rol a actualizar.

- router.delete("/", auth, isAdmin, RolesController.deleteRole);
En este, el admin tras logearse y poner el token podrá borrar roles. Por body se pasara el id del rol a borrar.
