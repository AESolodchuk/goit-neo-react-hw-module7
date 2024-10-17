import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../redux/filtersSlice' 
import { filter } from '../../redux/selectors'
import css from './SearchBox.module.css'

const SearchBox = () => {    
    
    const dispatch = useDispatch()

    const value = useSelector(filter);

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
                value={value}
            />
        </div>
    )
}

export default SearchBox