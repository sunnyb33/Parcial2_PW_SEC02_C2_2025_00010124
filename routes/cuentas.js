import express from 'express';
import { 
    getAllCuentas, 
    getCuentaById, 
    searchCuentas, 
    getBalance 
} from '../controllers/cuentasController.js';

const router = express.Router();

router.get('/cuentas', (req, res) => {
    if (Object.keys(req.query).length > 0) {
    return searchCuentas(req, res);
        }
    getAllCuentas(req, res);
});

router.get('/cuenta/:id', getCuentaById);
router.get('/cuentasBalance', getBalance);

export default router;
