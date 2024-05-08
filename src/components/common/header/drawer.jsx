
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}   >
        <MenuRoundedIcon className='link'/>
        </IconButton>       
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <div className='drawer-div'>
        <Link to= '/'>
      <p className='link'>Home</p>
      </Link>

      <Link to= '/compare'>
      <p className='link'>Compare</p>
      </Link>

      <Link to ="/watchlist">
      <p className='link'>WatchList</p>
      </Link>

      <Link to= "/dashboard">
      <p className='link'>DashBoard</p>
      </Link>

    </div>
      </Drawer>
    </div>
  );
}