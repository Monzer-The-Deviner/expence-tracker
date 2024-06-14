import Transaction from './Transaction'
import { GlobalContext } from '../context/GlobalProvider';
import { useContext } from 'react'

const TrasactionList = () => {
    const {transactions} = useContext(GlobalContext)

    return ( 
        <div className='flex-col'>
          { transactions.map(trans=> 
          <div key={trans.id} >
            {/* {transactions.length>0&& transactions[transactions.length-1].tranTime.day!==trans.tranTime.day && <div>{trans.tranTime.day}</div> } */}
            <Transaction transaction={trans}/>
          </div>
            )}
        </div>
     );
}
 
export default TrasactionList;