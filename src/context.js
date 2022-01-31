import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
} 

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [check, setCheck] = useState(false);
  const [submit, setSubmit] = useState({
    num: 10,
    cate: table.sports,
    diff: 'easy',
  });
  const [ind, setInd] = useState(0);
  const [data, setData] = useState([{}]);
  const [point, setPoint] = useState(0)
  const fetchAPI = async() =>{
    setLoading(true);
    setWaiting(false);
    const url = `${API_ENDPOINT}amount=${submit.num}&diff=${submit.diff}&cate=${submit.cate}&type=multiple`;
    const res = await axios(url).catch((error) => console.log(error));
    if(res){
      const data = res.data.results;
      if(data.length <= 0){
        setWaiting(true)
      }else{
        setData(data);
      }
    }
    setLoading(false);
  }
  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name);
    setSubmit({...submit, [name]: value });
  }
  const handleSubmit = () =>{
    if(submit.num > 50){
      setCheck(true);
      restart();
    }
    else{
      setCheck(false);
      setWaiting(false);
      fetchAPI();
    }
    
  }
  // console.log(submit);
  const handleNextQuestion = () => {
    if(ind===submit.num-1){
      setModal(true);
    }else{
      setInd(ind => ind + 1);
    }
  }
  const trfal = (bol) => {
    if(bol){
      setPoint(point => point+1);
    }
    handleNextQuestion();
  }
  const restart = () => {
    setModal(false);
    setWaiting(true);
    setLoading(false);
    setPoint(0);
  }

  return <AppContext.Provider value={{
    waiting,
    loading,
    ...submit,
    data,
    point,
    ind,
    modal,
    check,
    restart,
    handleNextQuestion,
    handleChange,
    handleSubmit,
    trfal,
    
  }}>
  {children}
  </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
 