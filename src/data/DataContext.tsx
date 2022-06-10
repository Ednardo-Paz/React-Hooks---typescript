import React from 'react';

type Props = {
  number?: number,
  text?: string
}

export const data: Props = {
  number: 123,
  text: 'Context API...',
};

export const DataContext = React.createContext(data);
