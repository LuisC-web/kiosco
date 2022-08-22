import React from 'react';
import { useContext } from 'react';
import { QuioscoContex } from '../context/QuioscoProvide';
const useKiosco = () => useContext(QuioscoContex);

export default useKiosco;
