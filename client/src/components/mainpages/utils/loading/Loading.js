import React from 'react'
import './loading.css'
import AKlogo from '../../../assets/images/AKlogo.png'

function Loading() {
    return (
        <div className="load-page">
            <div className="loader">
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <section>
                                                    <img className="loard-logo" src= {AKlogo}  alt="" />
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading
