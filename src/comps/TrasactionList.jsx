/* eslint-disable react/prop-types */
import Transaction from './Transaction'
import { GlobalContext } from '../logic/GlobalProvider';
import { useContext } from 'react'

const TransactionList = ({date}) => {
    const {transactions} = useContext(GlobalContext)
    const fillterdTrans= transactions.filter(tran=>{
      const {month,day ,year} = tran.tranTime
      const stringDate = `${month}-${day}-${year}`
      return date==stringDate
    })
    return ( 
        <div className='w-full gap-2 flex flex-col'>
          <div className='bg-slate-700 self-center px-2 text-white rounded-full w-fit'>{date}</div>
          {fillterdTrans&& fillterdTrans.map(trans=> 
          <div key={trans.id} >
            <Transaction transaction={trans}/>
          </div>
            )}
        </div>
     );
}
 
export default TransactionList;