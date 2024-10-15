import { useDispatch } from 'react-redux'
import { changeFilter } from '../../redux/filtersSlice' 
import css from './SearchBox.module.css'

const SearchBox = () => {    
    
    const dispatch = useDispatch()

    const handleChange = ({ target }) => {
        dispatch(changeFilter(target.value))
    }

    return (
        <div className={css.searchform}>
            <label>
                Find contacts by name
            </label>
            <input
                type="text"
                name="filter"                
                onChange={handleChange}
                className={css.input}                
            />
        </div>
    )
}

export default SearchBox