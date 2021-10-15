import {Card} from 'react-bootstrap';

function Info(props) {

    return (
        <div class='mt-5'>
            <Card style={{ width: '18rem' }} className='mb-5 bg-primary text-white'>
            <Card.Body>
                <Card.Title>O <i>bodyfat percentage</i></Card.Title>
                <Card.Subtitle className="mb-2 primary-text-muted">O que é</Card.Subtitle>
                <Card.Text>
                <p>Sua porcentagem de gordura corporal representa quantos porcentos do seu peso é gordura.</p>
                <p>Esse programa usa como método a fórmula da Marinha Estadunidense, que usa a seguinte fórmula:</p>
                <p>Para homens: <p class='fs-6'>86.010 x log10 (abdomen - neck) - 70.041 x log10 (height) + 36.76</p></p>
                <p>Para mulheres: <p class='fs-6'>163.205 x log10 (waist + hip - neck) - 97.684 x log10 (height) - 78.387</p></p>
                </Card.Text>
                <Card.Link href="https://www.mynavyhr.navy.mil/Portals/55/Support/21stCenturySailor/Physical/Guide%204-Body%20Composition%20Assessment%20(BCA)%20(MAR%202021).pdf?ver=vxnKSrQog-jTpTauXIeh8g%3D%3D" className='text-white'>Referência</Card.Link>
            </Card.Body>
            </Card>
            
        
        </div>
    );
}

export default Info;
