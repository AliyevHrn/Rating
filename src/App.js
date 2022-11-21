import { useState } from 'react';
import './App.scss';
import Rating from './components/rating/rating';

function App() {

  const [state, setState] = useState([
    {
      id: 1,
      title: 'Профессионализм и компетентность сотрудников',
    },
    {
      id: 2,
      title: 'Своевременность и качество подготовки документов',
    },
    {
      id: 3,
      title: 'Взаимодействие с другими подразделениями',
    }
  ]);
  const [result, setResult] = useState([]);

  const getData = (rating) => {
    setResult([...result, rating]);
  }

  const addRating = () => {
    setState([...state, {
      id: ++state.length,
      title: "Какой-то вопрос, в котором много букв"
    }])
  }

  const sendResponse = () => {
    console.log(result);
  }

  return (
    <div className='container'>
      {
        state.map(({id, title}) => {
          return <Rating key={id} id={id} number={id <= 9 ? `0${id}` : id} title={title} getData={getData}/>
        })
      }
      
      <div className='btns'>
        <button onClick={addRating}>Создать набор</button>    
        <button onClick={sendResponse}>Отправить ответ</button>
      </div>
    </div>
  );
}

export default App;
