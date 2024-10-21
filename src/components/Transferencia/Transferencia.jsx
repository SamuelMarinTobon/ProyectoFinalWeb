import React, { useState } from 'react';
import logo from '../../assets/logo5.png';
import './Transferencia.css';
import TopContainer from '../ContenedorSuperior/ContenedorSup';
import { useNavigate } from 'react-router';

export default function Transferencia() {
    const navigate = useNavigate();

    // Estados 
    const [monto, setMonto] = useState('');  // Estado para el monto de la transferencia
    const [tipoCuenta, setTipoCuenta] = useState('');  // Estado para el Tipo de cuenta
    const [numeroCuenta, setNumeroCuenta] = useState('');  // Estado para el número de cuenta
    const [banco, setBanco] = useState('');  // Estado para el banco seleccionado
    const [movimientos, setMovimientos] = useState([ // Estado inicial para movimientos
        {
            tipo: 'Tipo Movimiento',
            descripcion: 'Transferencia recibida',
            fecha: '2024-10-20',
            desde: '*6118',
            monto: 1000
        },
        {
            tipo: 'Tipo Movimiento',
            descripcion: 'Transferencia realizada',
            fecha: '2024-10-19',
            desde: '*7423',
            monto: 500
        }
    ]);

    // Lista de bancos
    const bancos = [
        'Banco Agrario',
        'Banco AV Villas',
        'Banco Caja Social',
        'Banco de Bogotá',
        'Banco de Occidente',
        'Banco Popular',
        'Banco Santander',
        'Bancolombia',
        'BBVA',
        'Citybank',
        'Davivienda',
        'ITAU',
        'RappiPay',
        'Scotiabank Colpatria'
    ];
    const cuentas = [
        'Ahorros',
        'Corriente'
    ];

    return (
        <div>
            <TopContainer />

            <div className='principalTransferencias'>
                <div className='ContainerTransferencias'>
                    <img src={logo} alt='Logo' className='logoTransferencias' />
                    <h1 className='EstebanquitoTransferencias'>Realizar Transferencia</h1>
                    <select
                        className='InputTransferencias'
                        value={banco}
                        onChange={(e) => setBanco(e.target.value)}  // Actualiza el estado 'bancoSeleccionado'
                        required
                    >
                        <option value='' disabled>Seleccione el banco destino</option>
                        {bancos.map((banco, index) => (
                            <option key={index} value={banco}>
                                {banco}
                            </option>
                        ))}
                    </select>
                    <select
                        className='InputTransferencias'
                        value={tipoCuenta}
                        onChange={(e) => setTipoCuenta(e.target.value)}  // Actualiza el estado 'tipoCuenta'
                        required
                    >
                        <option value='' disabled>Tipo de Cuenta</option>
                        {cuentas.map((tipoCuenta, index) => (
                            <option key={index} value={tipoCuenta}>
                                {tipoCuenta}
                            </option>
                        ))}
                    </select>
                    <input
                        type='text'
                        className='InputTransferencias'
                        placeholder='Número de Cuenta'
                        value={numeroCuenta}
                        onChange={(e) => setNumeroCuenta(e.target.value)}  // Actualiza el estado 'numeroCuenta'
                        required
                    />
                    <input
                        type='number'
                        className='InputTransferencias'
                        placeholder='Monto'
                        value={monto}
                        onChange={(e) => setMonto(e.target.value)}  // Actualiza el estado 'monto'
                        required
                    />

                    <button type='submit' className='BotonTransaccion'>
                        Realizar
                    </button>
                </div>

                <div className='HistorialTransferencias'>
                    <h2 className='tituloHistorialTransferencias'>Historial de Transferencias</h2>
                    {movimientos.map((movimiento, index) => (
                        <div key={index} className='ElementoHistorialTransferencias'>
                            <div className='DetalleMovimientoTransferencias'>
                                <p className='DetalleMovimientoTransferencias'>
                                    <strong>{movimiento.tipo}:</strong> {movimiento.descripcion}
                                </p>
                                <p className='DetalleMovimientoTransferencias'>
                                    <strong>Fecha:</strong> {movimiento.fecha}
                                </p> <p className='DetalleMovimientoTransferencias'>
                                    <strong>Desde Cta:</strong> {movimiento.desde}
                                </p>
                                <p className='DetalleMovimientoTransferencias'>
                                    <strong>Monto:</strong> ${movimiento.monto}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
