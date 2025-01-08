import React from 'react'
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const DateInput = ({setData, value, name}: {setData: any, value: any, name: string}) => {
    const resetCalendar = () => {
        console.log("reset");
    }
  return (
    <DatePicker
    onCalendarClose={resetCalendar}
    onFocus={resetCalendar}

    onChange={(e: any) =>
        setData(
            name,
            e?.toLocaleString(),
        )
    }
    calendarIcon={<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-calendar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h16" /><path d="M11 15h1" /><path d="M12 15v3" /></svg>}
    clearIcon={null}
    name="birth_date"
    value={value}
/>
    )}
export default DateInput
