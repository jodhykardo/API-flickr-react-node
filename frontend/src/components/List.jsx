import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col, Container, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Flickr = () => {
    const [photo, setPhoto] = useState([]);
    const [searchTag, setInputText] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    let sendData = (index) => {
        navigate(`detail`, { state : {id: index, data: photo}});
    }

    let author = (index) => {
        navigate(`author/${index}`);
    }
    
    let searchBar = async (e) => {
        e.preventDefault();
        setInputText("");
        setMessage(`Searching for: ${searchTag}`);
        try {
            console.log(searchTag);
            const response = await axios.get(process.env.REACT_APP_BACKEND_URL + "/flickr?tag=" + searchTag, { headers: { "apikey": process.env.REACT_APP_API_KEY } });
            setPhoto(response.data.items);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPhoto();
    }, []);

    const getPhoto = async () => {
        const response = await axios.get(process.env.REACT_APP_BACKEND_URL + "/flickr", { headers: { "apikey": process.env.REACT_APP_API_KEY } });
        setPhoto(response.data.items);
        setMessage("");
    };

    return (
        <div>
            <h1 className="m-5 text-center text-black">UPLOAD FROM EVERYONE</h1>
            <form onSubmit={searchBar}>
                <div className="row w-75 mx-auto">
                    <div className="col-10">
                        <div className="search">
                            <Form.Control
                                id="outlined-basic"
                                value={searchTag}
                                onChange={(e) => setInputText(e.target.value)}
                                variant="outlined"
                                fullWidth
                                label="Search"
                            />
                        </div>
                    </div>
                    <div className="col-2">
                        <Button type="submit" className="w-100">
                            Search
                        </Button>
                    </div>
                </div>
            </form>
            <div className="w-75 mx-auto">
                <div className="my-2 ml-3">
                    {message}
                </div>
                <Container>
                    <Row>
                        {photo.map((photo, k) => (
                            <Col key={k} xs={12} md={4} lg={3}>
                                <Card className="my-3">
                                    <Card.Img className="rounded-top" src={photo.media.m} onClick={() => { sendData(k)}} />
                                    <Card.Body className="bg-black rounded-bottom">
                                        <Card.Text className="text-white" onClick={() => { author(photo.author_id)}}>Author: {photo.author.replace("nobody@flickr.com", "")}</Card.Text>
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