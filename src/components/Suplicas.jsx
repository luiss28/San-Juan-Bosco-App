import Body from '../components/Body';
import CuentaGrande from './CuentaGrande';
import CuentaPequena from './CuentaPequena';
import Gloria from './Gloria';

export default function Suplica() {

    return(
        <Body>
            <b>1 Cuenta Grande</b>
            <CuentaGrande/>
            <br/>
            <b>10 Cuentas Pequenas</b>
            <CuentaPequena/>
            <br/>
            <Gloria/>
        </Body>
    )
}