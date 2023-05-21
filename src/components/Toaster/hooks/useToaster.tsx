import { useContext } from 'react';
import ToasterContext from '../context/ToasterContext';

export const useToaster = () => useContext(ToasterContext);
