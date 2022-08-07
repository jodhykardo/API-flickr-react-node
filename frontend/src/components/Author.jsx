import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Flickr = () => {
    const { id } = useParams();
    const [photo, setPhoto] = useState([]);
    const [title, setTitle] = useState();

    useEffect(() => {
        getPhoto();
    }, []);
    
    const getPhoto = async () => {
        const response = await axios.get(process.env.REACT_APP_BACKEND_URL + "/flickr/"+id, { headers: { "apikey": process.env.REACT_APP_API_KEY } });
        setPhoto(response.data.items);
        setTitle(response.data.title);
    };

    return (
        <div>
            <h1 className="m-5 text-center text-black">{title}</h1>
            <div className="w-75 mx-auto">
                <Container>
                    <Row>
                        {photo.map((photo, k) => (
                            <Col key={k} xs={12} md={4} lg={3}>
                                <Card className="my-3">
                                    <Card.Img className="rounded-top" src={photo.media.m}/>
                                    <Card.Body className="bg-black rounded-bottom"> 
                                        <Card.Text className="text-white">Date: {photo.date_taken}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Flickr;