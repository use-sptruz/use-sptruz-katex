import { useEffect, useState } from 'react';
import KaTeX from 'katex';
import { UseKaTeX, KatexOptions } from '../types';

export const useKaTeX = ({
  formula,
  displayMode,
  errorColor,
  renderError,
}: UseKaTeX) => {
  const [html, setHtml] = useState('');
  const [error, setError] = useState<Error>();

  useEffect(() => {
    let isMounted = true;

    try {
      const options: KatexOptions = {
        displayMode,
        errorColor,
        throwOnError: !!renderError,
      };
      const html = KaTeX.renderToString(formula, options);

      if (isMounted) {
        setHtml(html);
        setError(undefined);
      }
    } catch (error) {
      if (error instanceof KaTeX.ParseError || error instanceof TypeError) {
        setError(error);
      } else {
        throw error;
      }
    }

    return () => {
      isMounted = false;
    };
  }, [formula, displayMode, errorColor, renderError]);

  return { html, error };
};
