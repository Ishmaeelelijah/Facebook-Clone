import React from 'react'
import {Container, Row,Col} from 'react-materialize'
import AddPost from './AddPost'
import Profile from './Profile'
import PostList from './PostList'



export default () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Profile/>
                </Col>
                <Col s={12} m={4}>
                    <AddPost/>
                   <PostList/>
                </Col>

            </Row>
          
        </Container>
        
    )
}
