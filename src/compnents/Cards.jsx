import { Flex, Button, Card, Col, Row } from 'antd';
import{ useAppContext} from '../features/AppProvider'
const Cards = (props) => {
    const data=props.sendData;
    const {count,setCount}=useAppContext();
    const increseCountInAddToCard=()=>
    {
      setCount((count)=>count+1)
    }
    
    return(
      <>
        <Row gutter={16}>
        { data.map((ele)=>(
        <Col span={8}>
          <Card
                  key={ele.id}
                  size="small"
                  title={ele.title}
                  cover={<img alt={ele.title} src={ele.image} style={{ width: '170px',height:'160px' 
                    }}/>}
                >
                                    <h5>{ele.title}</h5>
                                    <span>{ele.userId}</span>
                                    {/* <p>{ele.id}</p> */}
                                    <h6>Price Rs- {ele.price}</h6>
                                    
              </Card>
                                    <section>
                                      <Flex gap="40px" wrap>
                                        <Button type="primary" onClick={increseCountInAddToCard}>Add to Cart</Button>
                                        <Button type="primary">Add to Wishlist</Button>
                                      </Flex>
                                    </section>
                                
        </Col>
            ))}
      </Row>  
  </>
)};
export default Cards;