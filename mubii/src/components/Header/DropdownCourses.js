import React,{useState} from 'react'

const DropdownCourses = () => {

    const [selectedValue , setSelectedValue]= useState('');
    const handleSelectChange = (event) =>{
        setSelectedValue(event.target.value);


    };
  return (
    <div>

<select value={selectedValue} onChange={handleSelectChange}>
     
        <option value="program">Program</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  )
}

export default DropdownCourses