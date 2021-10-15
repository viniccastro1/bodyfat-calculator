import {Row, Col, Table} from 'react-bootstrap';

function BodyfatTable(props) {

    return (
        <Col sm={5}>
        <div class='section-card p-2 bg-white' hidden={props.hideThis}>
        <Col>
        <Table bordered >
        <tbody class=''>
            <tr>
            <td>Peso total</td>
            <td>{props.weight}kgs</td>
            </tr>
            <tr>
            <td>Percentual de gordura corporal</td>
            <td>{props.bfPercentage}%</td>
            </tr>
            <tr>
            <td>Massa gorda</td>
            <td>{props.fatMass}kgs</td>
            </tr>
            <tr>
            <td>Massa magra</td>
            <td>{props.leanMass}kgs</td>
            </tr>
        </tbody>
        </Table>
        </Col>
        </div>
        </Col>
    );
}

export default BodyfatTable;
