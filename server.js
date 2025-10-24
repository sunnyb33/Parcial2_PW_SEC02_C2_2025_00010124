import express from 'express';
import CuentasRoutes from './routes/cuentas.js';

const app = express();
const PORT = 3130;

app.use(express.json());
app.use('/', CuentasRoutes);

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${PORT}`)
});