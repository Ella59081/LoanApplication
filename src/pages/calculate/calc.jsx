import './calc.css'
import { useState } from "react";

function Calc(){
    
    const [formData, setFormData] = useState({
        amount: 0,
        principal: 0,
        rate: 0
    })

    const[result, setResult] = useState([]);

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name] : e.target.value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        let amount = formData.amount
        let principal = formData.principal;
        let rate = Math.round((principal * 12)/amount);
        console.log(rate);
        const ans = Calculation(amount, principal, rate);
        setResult((preResult) => [...preResult, Math.round(ans)]);

    }

    function Calculation(amount, principal, rate){
        let expo = Math.pow((1 + rate), principal)
        let halfUp = ((amount * rate / 100) * expo);
        let halfDown = (expo - 1)
        let monthPay = halfUp / halfDown

        return monthPay;
    }

    return(
        <>
        <div className='con'>
            <div className="main">
                <div className="header">
                    <h1>Calculate Monthly Payment</h1>
                </div>
                <form action="" className="form" onSubmit={handleSubmit}>
                    <div className='spread'>
                      <label htmlFor="amount">Loan amount</label>
                      <input type="number" name="amount" id="amount" onChange={handleChange}/>
                    </div>
                    <div className='wrap'>
                       <div className='spread'>
                       <label htmlFor="plans">Payment plans</label>
                       <input type="number" name='principal' id='plans' onChange={handleChange}/>
                       </div>
                       <select name="plans" id="">
                        <option value="years">years</option>
                        <option value="months">months</option>
                        </select>
                    </div>
                    <button type="submit">
                        Submit
                    </button>
                </form>
                {
                    result &&
                <div className="">
                  {
                    result.map((item) =>(
                       <div className='answer'>
                           <h1>Your monthly payment</h1>
                           <p>Your monthly payment is: $ {result}</p>
                           <p>Amount: $ {formData.amount}</p>
                           <p>To be payed in: {formData.principal} years</p>
                           <p>At an interest rate of: {formData.rate} years</p>
                       </div>
                    ))
                  }
                </div>
                }
            </div>
        </div>
        </>
    )
}

export default Calc;
