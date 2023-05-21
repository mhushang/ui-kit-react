import { createContext } from 'react';

import { IToasterContext } from '../ToasterTypes';

const ToasterContext = createContext({} as IToasterContext);

export default ToasterContext;
