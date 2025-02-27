import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css"
import { selectNameFilter } from "../../redux/selectors";
import { changeFilter } from "../../redux/filtersSlice";


const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
      <label className={s.findContacts}>
          Find contacts by name
      <input
        type="text"
        placeholder="Search for name"
        value={filter}
        onChange={e => {
              dispatch(changeFilter(e.target.value));
            }}
      />
    </label>
  )
}

export default SearchBox