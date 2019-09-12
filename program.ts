import StartUp from './startUp';

let port = process.env.port || '3050';

StartUp.app.listen(port, function () {
    console.log(`Servidor escutando na porta ${port}`);
})