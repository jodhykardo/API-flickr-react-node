import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const Detail = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    let next = (id) => {
        if (id == state.data.length - 1) {
            id = 0;
            navigate('/detail', { state: { id: id, data: state.data } });
        } else {
            id = parseInt(id) + 1;
            navigate('/detail', { state: { id: id, data: state.data } });
        }
    }

    let prev = (id) => {
        if (id == 0) {
            id = state.data.length - 1;
            navigate('/detail', { state: { id: id, data: state.data } });
        } else {
            id = parseInt(id) - 1;
            navigate('/detail', { state: { id: id, data: state.data } });
        }
    }

    return (
        <div className="w-75 mx-auto">
            <div className="row bg-secondary rounded d-flex justify-content-center m-5">
                <div className="col-1 my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { prev(state.id) }} width="32" height="32" fill="currentColor" className="bi bi-arrow-left text-center" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                </div>
                <div className="col-4">
                    <div className="d-flex justify-content-center">
                    <div className="Container mt-2 text-center" dangerouslySetInnerHTML={{ __html: state.data[state.id].description }}></div>
                    </div>
                </div>
                <div className="col-1 my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { next(state.id) }} width="32" height="32" fill="currentColor" className="bi bi-arrow-right text-center" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </div>
            </div>
            <div className="row bg-white rounded-lg mb-5">
                
                <div className="text-center">Date: {state.data[state.id].date_taken}</div>
            </div>
        </div>
    );
};

export default Detail;