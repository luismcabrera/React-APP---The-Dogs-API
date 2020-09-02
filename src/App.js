import React, { useState, useEffect } from 'react';
import Select from './components/Select';
import Card from './components/Card';
import getDog from './helpers/getDog';

const initialDog = {
  image: "https://diariocorreo.pe/resizer/6mf4_AnK4yAMwXCP_C5dtR34vdA=/580x330/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/QLR4EJTTKZEPXAMY34YHZU3FSA.jpg",
  breed: {
    id: 1,
    name: "Labrador"
  }
}

function App() {
  const [dog, setDog] = useState(initialDog);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    updateDog();
  }, []);

  const updateDog = (breedId) => {
    setLoading(true);
    getDog(breedId)
      .then((newDog) => {
        setDog(newDog);
        setLoading(false);
      })
  }
  
  return (
    <div className="app">
      <Select updateDog={updateDog}/>
      <Card dog={dog} updateDog={updateDog} loading={loading}/>
    </div>
  );
}

export default App;
