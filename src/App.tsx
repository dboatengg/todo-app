import { useState, useEffect } from 'react';
import Form from './components/Form';
import TaskList from './components/TaskList';

function App() {
  const [formData, setFormData] = useState([]);

    useEffect(() => {
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);


  const handleFormSubmit = (data) => {
    const updatedFormData = [...formData, data];
    setFormData(updatedFormData);
    localStorage.setItem('formData', JSON.stringify(updatedFormData));
  };

  const handleDelete = (id) => {
    const updatedFormData = formData.filter((item, index) => index !== id); 
    setFormData(updatedFormData);
    localStorage.setItem('formData', JSON.stringify(updatedFormData));
  };

  return (
    <div className='container mt-3'>
      <Form onSubmit={handleFormSubmit} />
      <TaskList data={formData} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
