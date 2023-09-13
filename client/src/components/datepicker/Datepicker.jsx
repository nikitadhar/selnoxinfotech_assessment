import React  from 'react';
// import DatePicker from 'react-datepicker';

export default function Datepicker() {
  // const [selectedDate, setSelectedDate] = useState(null);

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

  return (
    <>
    <div className='ml-12' >
    <div className='flex mb-9 gap-28'>
        <h2 className='text-2xl mt-3'>Select employee dropdown</h2>
        <h2 className='text-2xl mt-3'>Date picker</h2>
        </div>
      <div className='flex gap-10 mb-9'>
        <div>  
                <select name="" id=""  className="bg-slate-200   w-80 p-2 border-r-8 rounded-lg">
<option value="">Select Employee</option>

                </select>
                
                
                </div>
        <div>
<select name="" id=""  className="bg-slate-200   w-80 p-2 border-r-8 rounded-lg">
 <option value="">Pick Date</option>
</select>

        </div>
      </div>
      <div className='flex gap-10 mb-9'>
        <div>  <select name="" id=""  className="bg-slate-200   w-80 p-2 border-r-8 rounded-lg">
<option value="">Select Employee</option>

                </select></div>
        <div>
        <select name="" id=""  className="bg-slate-200   w-80 p-2 border-r-8 rounded-lg">
 <option value="">Pick Date</option>
</select>

        </div>
      </div >
      <div className='flex gap-10 mb-9'>
        <div>  
                <select name="" id=""  className="bg-slate-200   w-80 p-2 border-r-8 rounded-lg">
<option value="">All practitioners</option>

                </select>
                
                
                </div>
        <div>
<select name="" id=""  className="bg-slate-200   w-80 p-2 border-r-8 rounded-lg">
 <option value="">Pick Date</option>
</select>
        </div>
      </div>

</div>  
{/* //second Line container */}

<div>
  <h1 className='text-2xl mt-3 ml-12 '>Search bar states (Select employee dropdown )</h1>
  <p className='ml-12  text-sm'>Indicates how the employee search bar behaves if you search for an employee (Don’t design it as an independent element - It’s part of “Select employee dropdown”) </p>
</div>

    </>
  )
}
