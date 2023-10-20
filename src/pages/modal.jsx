import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Modal = ({ show, onClose, data }) => {

    const handlePortfolio = (url) => {
        //window.location.href = url;
        window.open(url, '_blank')
    }

    const handleDownload=(url)=>{
        window.open(url,'_blank')
    }

    console.log("modal data ... ", data)
    return (
        <div className={`modal fade ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Details</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">

                        {/* <div className="card" style={{"width": "18rem"}}>
                             */}
                        <img role="button" src={data?.urls?.thumb} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">Image Info</h5>
                            <p className="card-text">
                                <div className='row'>
                                    <div className='col-md-4'>
                                        Number of Likes:
                                    </div>
                                    <div className='col-md-4'>
                                        {data?.likes} Likes
                                    </div>
                                </div>
                                {data?.description && 
                                <>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        Description:
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        {data?.description}
                                    </div>
                                </div>
                                </>
                                }
                            </p>
                            <h5 className="card-title">User Info</h5>
                            <p className="card-text">
                                <div className='row'>
                                    <div className='col-md-4'>
                                        Username:
                                    </div>
                                    <div className='col-md-4'>
                                        {data?.user?.username}
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        Full Name:
                                    </div>
                                    <div className='col-md-4'>
                                        {data?.user?.name}
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        Location:
                                    </div>
                                    <div className='col'>
                                        {data?.user?.location}
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        Bio:
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        {data?.user?.bio}
                                    </div>
                                </div>
                                {data?.user?.social?.portfolio_url &&
                                <div className='row'>
                                    <div className='col'>
                                        <span role='button'
                                            className='link-primary link-underline-primary'
                                            onClick={() => handlePortfolio(data?.user?.social?.portfolio_url)}
                                        >
                                            Go to Portfolio
                                        </span>
                                    </div>
                                </div>}
                                <div className="social-icons">
                                {data?.user?.social?.instagram_username &&
                                    <a className='m-2' href={"https://www.instagram.com/" + data?.user?.social?.instagram_username} target="_blank">
                                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                                    </a>}

                                    {data?.user?.social?.twitter_username &&
                                        <a className='m-2' href={"https://twitter.com/" + data?.user?.social?.twitter_username} target="_blank">
                                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                                        </a>}

                                </div>
                            </p>
                        </div>

                        {/* </div>
                     */}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onClose}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={()=>handleDownload(data?.links?.download)}>Download</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
