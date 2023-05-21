import React from 'react';

import { MESSAGE_TYPE } from './MessageConstants';

export type TMessageType =
  | MESSAGE_TYPE.success
  | MESSAGE_TYPE.info
  | MESSAGE_TYPE.warning
  | MESSAGE_TYPE.error;

export interface IMessageProps {
  isOpen?: boolean;
  text: string | React.ReactNode;
  type: TMessageType;
  icon?: React.ReactNode | boolean;
  backgroundColor?: `#${string}`;
  className?: string;
}
