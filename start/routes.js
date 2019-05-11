'use strict'

const Route = use('Route')

Route.on('/login').render('auth.login');
Route.post('/login', 'UserController.login').validator('LoginUser');

Route.on('/signup').render('auth.signup');
Route.post('/signup', 'UserController.create').validator('CreateUser');

Route.get('/logout', async ({ auth, response }) => {
    await auth.logout();
    return response.redirect('/');
});

Route.get('/', 'JobController.home');

Route.group(() => {
    Route.get('/', 'JobController.index');
    Route.get('/delete/:id', 'JobController.delete');
    Route.get('/edit/:id', 'JobController.edit');
    Route.post('/create', 'JobController.create').validator('CreateJob');
    Route.post('/update/:id', 'JobController.update').validator('CreateJob');
}).prefix('/post-a-job');


