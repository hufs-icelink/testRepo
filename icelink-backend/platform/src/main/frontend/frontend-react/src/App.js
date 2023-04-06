import React, {useEffect, useState} from 'react';
import axios from 'axios';
function App() {
    const [id, setId] = useState('');
 
    useEffect(() => {
      axios.get('http://localhost:1819/velog')
      .then(response => setId(response.data))
      .catch(error => console.log(error))
    }, []);
     
      console.log(id);
      return (
          <div>
              {id}
          </div>
      );

}
// 추가한 코드 - 호영

export default App;
