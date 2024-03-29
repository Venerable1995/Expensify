import {addExpense,editExpense,removeExpense} from '../../actions/expenses';
test('should setup remove expense action object',()=>{
    const action = removeExpense({id:'123abc'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
})
test('should setup edit expenses',()=>{
    const action =editExpense('asdd',{description:'hello'})
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'asdd',
        updates:{description:'hello'}
    })
})
test('should setup add expense action object with provided values',()=>{
const expenseData={
    description:'Rent',
    amount:109500,
    createdAt:1000,
    note:'this was last month rent'
}
const action =addExpense(expenseData);
expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{
        ...expenseData,
        id:expect.any(String)
    }
})
})
test('should setup add expense action object with default values',()=>{
const action = addExpense({})
expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{
        description:'',
        amount:0,
        createdAt:0,
        note:'',
        id:expect.any(String)
    }
    
})
})