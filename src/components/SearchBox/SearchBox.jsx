import s from "./SearchBox.module.css"


const SearchBox = ({value, onChange}) => {
  return (
      <label className={s.findContacts}>
          Find contacts by name
      <input
        type="text"
        placeholder="Search for name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  )
}

export default SearchBox