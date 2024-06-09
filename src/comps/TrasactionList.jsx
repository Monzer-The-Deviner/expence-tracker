import Transaction from './Transaction'
import { GlobalContext } from '../cotext/GlobalProvider';
import { useContext } from 'react'

const TrasactionList = ({groub,task,groubList,taskList,addTask,addGroub,inputTask,inputGroub,checkBox,handleCheck,handleSelect}) => {
    const {transactions} = useContext(GlobalContext)
     
    let prevDate = 0
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