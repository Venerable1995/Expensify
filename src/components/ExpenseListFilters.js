import React from "react";
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import { setTextFilter ,sortByAmount,sortByDate,setStartDate,setEndDate } from "../actions/filters";
export class ExpenseListFilters extends React.Component{
    
    state={
        calenderFocused:null
    }
    onDatesChange=({startDate,endDate})=>{
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange=(calenderFocused)=>{
        this.setState(()=>({calenderFocused}))
    }
    onTextChange=(e)=>{
      this.props.setTextFilter(e.target.value);
    }
    onSortChange=(e)=>{
      if(e.target.value==="date"){
        this.props.sortByDate()
      }
      if(e.target.value==="amount"){
        this.props.sortByAmount()
      }
  }
    render(){
        return(
          <div>
            <input type="text" onChange={this.onTextChange} value= {this.props.filters.text} />
          <select 
             value={this.props.filters.sortBy}
             onChange={this.onSortChange}>
            <option value="date">Date</option>
            <option value="amount" >Amount</option>
          </select>
          <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={()=>false}
          />
          </div>)
    }
}
const mapStateToProps=(state)=>({
    filters : state.filters
})

const mapDispatchToProps =(dispatch)=>({
setTextFilter:(text)=>dispatch(setTextFilter(text)),
SortByDate : ()=>dispatch(sortByDate()) ,
SortByAmount:()=>dispatch(sortByAmount()),
setStartDate:(startDate)=>dispatch(setStartDate(startDate)),
setEndDate:(endDate)=>dispatch(setEndDate(endDate))

})

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters)