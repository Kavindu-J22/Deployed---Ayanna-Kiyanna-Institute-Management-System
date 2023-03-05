import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function LoadMore() {
    const state = useContext(GlobalState)
    const [page, setPage] = state.productsAPI.page
    const [result] = state.productsAPI.result

    return (
        <div className='load_more-btn'>
            {
                result < page * 9 ? ""
                : <a onClick={() => setPage(page+1)}><span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    Load more
                                                    </a>
            }
        </div>
    )
}

export default LoadMore
