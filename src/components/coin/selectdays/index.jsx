
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './style.css'
export default function SelectDays({ days, DayhandleChange ,noPtag }) {

  return (
    <div className='selection' style={{  color: 'white' }}>
    {!noPtag && <p>Price ChangeIn</p>}
        <Select
        sx={{
          height:'2.5rem',
          color : "var(--white)",
          "&.MuiOutlinedInput-notchedOutline":{
            borderColor:"var(--white)",
          },
          "& .MuiSvgIcon-root":{
            color: "var(--white)",
          },
          "& .MuiSvgIcon-root":{
            color:"var(--white)",
          },
          "&:hover":{
            "&& fieldset":{
              borderColor:"#3a80e9",
            },
          },
        }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={DayhandleChange}
         
        >
          <MenuItem value={1}>1 Days</MenuItem>
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={30}>1 Month</MenuItem>
          <MenuItem value={180}>6 Months</MenuItem>
          <MenuItem value={360}>1 Year</MenuItem>
        </Select>
     
    </div>
  );
}
