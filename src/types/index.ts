import { ReactElement } from 'react';

export interface KatexOptions {
  displayMode: boolean;
  errorColor?: string;
  throwOnError?: boolean;
}

export interface UseKaTeX {
  formula: string;
  errorColor?: string;
  renderError?: (error: Error) => ReactElement;
  displayMode: boolean;
}
