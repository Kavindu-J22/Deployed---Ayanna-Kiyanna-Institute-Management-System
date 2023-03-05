import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.productsAPI.category
    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search


    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    return (
        <div className="filter_menu" data-aos="flip-up">
            <div className="row">
                <span>වෙන්කරන්න : </span>
                <select name="category" value={category} onChange={handleCategory} >
                    <option value=''>සියලුම විශේෂාංග</option>
                    {
                        categories.map(category => (
                            <option value={"category=" + category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <input type="text" value={search} placeholder="ඔබගේ සෙවුම ඇතුලත් කරන්න!"
            onChange={e => setSearch(e.target.value.toLowerCase())} />

            <div className="row sort">
                <span>පිළිවෙල සකසන්න : </span>
                <select value={sort} onChange={e => setSort(e.target.value)} >
                    <option value=''>නවතම</option>
                    <option value='sort=oldest'>මුල සිට</option>
                    <option value='sort=-price'>කොටස/මිල : වැඩි-අඩු</option>
                    <option value='sort=price'>කොටස/මිල : අඩු-වැඩි</option>
                </select>
            </div>
        </div>
    )
}

export default Filters
