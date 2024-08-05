import React, { useEffect, useState } from 'react'
import Input from './Components/Input'

export default function App() {

  const [currencyInfio, setCurrencyInfio] =useState([])
  const [from1, setFrom1] = useState('USD')
  const [to, setTo] = useState('PKR')
  const options  = Object.keys(currencyInfio)
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${from1}`)
      .then((response) =>
        response.json()
      )
      .then((data) => {
        setCurrencyInfio(data.rates)
      })
      .catch((e) => {
        console.log(e)
      })
  },)


  const swap = () => {
    setFrom1(to)
    setTo(from1)
   
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfio[to])
  }
    
  return (
    <div
        className="flex flex-wrap items-center justify-center w-full h-screen bg-no-repeat bg-cover"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md p-5 mx-auto border rounded-lg border-gray-60 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <Input
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(amount) => setFrom1(amount)}
                            selectCurrency={from1}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <Input
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full px-4 py-3 text-white bg-blue-600 rounded-lg">
                        Convert {from1.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}