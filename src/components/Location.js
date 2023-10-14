import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';


const Location = () => {
  const {dispatch,Location } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_LOCATION',
                payload: val,
            })
    }
    

  return (
        // <div class="btn-group">
        //     <button type="button" name="Location" id="Location" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //         Currency
        //     </button>
        //     <div class="dropdown-menu">
        //         <a value="$" class="dropdown-item" href="#">$ Dollar</a>
        //         <a value="£" class="dropdown-item" href="#">£ Poung</a>
        //         <a value="€" class="dropdown-item" href="#">€ Euro</a>
        //         <a value="₹" class="dropdown-item" href="#">₹ Ruppee</a>
        //     </div>
        // </div>



            // <Dropdown>
            //   <Dropdown.Toggle variant="success" id="dropdown-basic" onSelect=>
            //     Currency ({Location})
            //   </Dropdown.Toggle>
        
            //   <Dropdown.Menu name="Location" id="Location" onChange={event=>changeLocation(event.target.value)}>
            //     <Dropdown.Item value="$" >$ Dollar</Dropdown.Item>
            //     <Dropdown.Item value="£" >£ Pound</Dropdown.Item>
            //     <Dropdown.Item value="€" >€ Euro</Dropdown.Item>
            //     <Dropdown.Item value="₹" >₹ Ruppee</Dropdown.Item>
            //   </Dropdown.Menu>
            // </Dropdown>



        <div className='alert alert-secondary' style={{backgroundColor:'green'}}> Loc: {
      <select name="Location" id="Location" onChange={event=>changeLocation(event.target.value)}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>	
      }	
    </div>
    );
};

export default Location;