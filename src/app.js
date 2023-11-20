import React from 'react';
import {Container,Nav,Navbar,Card, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Container>
             <>
            <div className="App">
           {/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">My project</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#pricing">Contact us</Nav.Link>
        </Nav>
      </Navbar>

      {/* Heading */}
      <h1 className="mt-4">Welcome to My Website</h1>

      {/* Cards */}
      <Row className="mt-4">
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img src='/iphone.jpg' />
            <Card.Body>
              <Card.Title>iphone11</Card.Title>
              <Card.Text>
              Écran 6,1  LCD Retina IPS - Résolution: 828 x 1792 pixels - Processeur: Apple A13 Bionic Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder) - Systéme d'exploitation: iOS - Mémoire RAM: 4 Go - Stockage: 128 Go - Appareil photo Arriere: Double: 12 MégaPixel (Ouverture f/1.8, 26mm) + 12 MégaPixels - Appareil Avant 12MégaPixels Retina Flash avec Wifi, 4G et Bluetooth 5.0 - Batterie: lithium‑ion - Enregistrement vidéo 4K - Temps de conversation Sans Fil: jusqu’à 17 heures - Classé IP68 (profondeur maximale de 4 mètres jusqu'à 30 minutes) - Couleur: Blanc - Garantie: 1 an
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='/iphone12.jpg' />
            <Card.Body>
              <Card.Title>iphone12</Card.Title>
              <Card.Text>
              Ecran 6,1" Super Retina XDR OLED - Résolution: 1170 x 2532 pixels - Processeur: Apple A14 Bionic (5 nm) Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm) GPU Apple GPU (4-core graphics) - Systéme d'exploitation: iOS - Mémoire RAM: 4 Go - Stockage: 128Go - Appareil photo Arriere: Double: 12 MégaPixels  f/1.6 + 12 MégaPixels f/2.4 - Appareil Avant 12 MégaPixels f/2.2 avec Wifi, 4G et Bluetooth 5.0 - Batterie: Li-Ion 2815 mAh - Résistance à l'eau - Couleur: Noir - Garantie: 1 an
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='/airpods.jpg' />
            <Card.Body>
              <Card.Title>airpods</Card.Title>
              <Card.Text>
              Écouteurs Airpods PHILIPS TAT4556BK - Connectivité: Sans Fil (Bluetooth ) - Fréquence: 20 - 20 000Hz - Impédance: 16 ohms - Sensibilite: 90 dB (1 kHz) - Portée maximale: Jusqu'à 10 mètres - Temps de conversation: 29 h - Batterie Rechargeable - Écouteurs avec ajustement intra-auriculaire - Protection contre l'eau IPX4 - Suppression active du bruit - Commandes tactiles - Micro intégré - Appariement facile - Passez des appels avec un seul écouteur - Poids: 49 g - Couleur: Beige - Garantie: 1 an
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
            </div>
             </>
        </Container>
    );
}

export default App;
