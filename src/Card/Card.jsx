import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Card.css"

function Cards() {
  return (
    <div className="enclosure" id='order'>

        <div className='Meal'>
        <span>You Meal is one click away</span>
        <span>Order <span className='now' id="Now"  >Now !!! </span></span>
        </div>

        <section className='containers'>
            <Card className='sub-container' >
                <Card.Img className='image-resize' variant="top" src="./media/photos/hamburger1.jpg" />
                    <Card.Body>
                        <Card.Title><h3 id='fast'>FAST DELIVERY</h3></Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lore mauris justo sed
                            </Card.Text>
                        <Button variant="primary"><a href="/order">ORDER NOW</a></Button>
                    </Card.Body>
            </Card>
            
            <Card className='sub-container'>
                <Card.Img className='image-resize' variant="top" src="./media/photos/chicken1.jpg" />
                    <Card.Body>
                        <Card.Title><h3 id='fast'>TASTY</h3></Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lore mauris justo sed
                            </Card.Text>
                        <Button variant="primary"><a href="/order">ORDER NOW</a></Button>
                    </Card.Body>
            </Card>

            <Card className='sub-container'>
                <Card.Img className='image-resize' variant="top" src="./media/photos/pizza1.jpg" />
                    <Card.Body>
                        <Card.Title><h3 id='fast'>NUTRITOUS</h3></Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lore mauris justo sed
                            </Card.Text>
                        <Button variant="primary"><a href="/order">ORDER NOW</a></Button>
                    </Card.Body>
            </Card>
        </section>

    </div>
    
  );
}

export default Cards;