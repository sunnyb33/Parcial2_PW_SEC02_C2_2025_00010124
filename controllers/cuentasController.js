import cuentas from '../data/cuentas.json' with { type:'json' };

    export const getAllCuentas = (req, res) => {
    res.json({
        count: cuentas.length,
        data: cuentas
    });
    };

    export const getCuentaById = (req, res) => {
    const id = req.params.id;
    const cuenta = cuentas.find(c => c.id === id);
    
    res.json({
        finded: !!cuenta,
        account: cuenta || null
    });
    };

    export const searchCuentas = (req, res) => {
    const queryParam = req.query.queryParam;
    
    if (!queryParam) {
        return res.json({
        finded: false,
        message: "No se proporcionó parámetro de búsqueda"
        });
    }

    const resultados = cuentas.filter(c => 
        c.id === queryParam || 
        c.nombre.toLowerCase().includes(queryParam.toLowerCase()) ||
        c.genero === queryParam
    );

    if (resultados.length === 0) {
        return res.json({
        finded: false,
        message: "No se encontraron cuentas"
        });
    }

    if (resultados.length === 1) {
        return res.json({
        finded: true,
        account: resultados[0]
        });
    }

    res.json({
        finded: true,
        data: resultados
    });
    };

    export const getBalance = (req, res) => {
    const cuentasActivas = cuentas.filter(c => c.isActive);
    const totalBalance = cuentasActivas.reduce((sum, cuenta) => {
        return sum + parseFloat(cuenta.balance);
    }, 0);

    res.json({
        status: cuentasActivas.length > 0,
        accountBalance: totalBalance.toFixed(2)
    });
    };

