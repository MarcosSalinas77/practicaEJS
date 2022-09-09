// Módulos
const express = require('express');
const app = express();
// Acá falta uno... 😇


// Configuración
app.use(express.static('public'));
// Acá falta el template engine

app.set('view engine', 'ejs');

app.set('views', 'src/views/pages')


//objeto
const platos = [{
    title: "Carpaccio fresco",
    desc:  "Entrada Carpaccio de salmón con cítricos U$S 65.50"
},
{
    title: "Risotto de berenjena",
    desc:  "Risotto de berenjena y queso de cabra U$S 47.00"
},
{
    title: "Mousse de arroz",
    desc:  "Mousse de arroz con leche y aroma de azahar U$S 27.50"
},
{
    title: "Espárragos blancos",
    desc:  "Espárragos blancos con vinagreta de verduras y jamón ibérico U$S 37.50"
}
]

// Rutas
// Acá falta el archivo de rutas y después las vistas de EJS
app.get('/', (req, res) => {
    res.render('index.ejs', {platos: platos})
});

app.get('/detalle-menu', (req, res) => {
    res.render('detalleMenu.ejs')
});

app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})