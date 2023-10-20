import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from "../service";
import { listImageRequest } from "../redux/image/actions";
import Modal from "./modal";
import LoadingPage from "./Loadingpage";

function Home() {

    const dispatch = useDispatch();

    const [isModalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    
    const { images } = useSelector(state => {
        return {
            images: state.images
        }
    })

    //const [page, setPage] = useState(images?.page);


    const openModal = (img) => {
        setModalOpen(true);
        setModalData(img)
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        dispatch(listImageRequest(images?.query, 1))
    }, [])


    const handlePageno = (status) => {
        if (status === 'next') {
            dispatch(listImageRequest(images?.query,images?.page + 1))
            //setPage(page + 1);
        }
        else {
            if (images?.page > 1) {
                dispatch(listImageRequest(images?.query,images?.page - 1))
                //setPage(page - 1)
            }
        }
    }

    return (
        <>

            <div className="social-icons">
            <button
            className={images?.page ? 'btn btn-primary me-3' : 'btn btn-secondary me-3 disabled-button'}
            onClick={() => handlePageno('prv')}>Prevous Page</button>
            <button className="btn btn-primary" onClick={() => handlePageno('next')}>Next Page</button>
            </div>
            {
                images?.loading ? <LoadingPage /> :
                    <div className="card-container">
                        <div className="row">
                            {images?.data &&
                                images?.data?.map(img => {
                                    return (
                                        <div onClick={() => openModal(img)} key={img.id} className="p-3 col-md-3">
                                            <div className="card card-img-top hover-zoom" style={{ "width": "18rem" }}>
                                                <img role="button" height="300px" width="300px" src={img.urls.thumb} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{img.user.name}</h5>
                                                    <h5>Number of likes: {img.likes}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>

            }
            <Modal data={modalData} show={isModalOpen} onClose={closeModal} />
        </>
    )
}

export default Home;