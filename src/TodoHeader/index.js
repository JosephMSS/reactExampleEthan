import React from 'react';
/**
 * @typedef component
 * @property {function} children
 * @property {Boolean} loading
 */
/**
 * Recibe varios componentes por medio de React.Children y los 
 * renderiza dentro del header por medio de 
 * React.cloneElement, ademas les pasa 
 * por parametros el estado de 
 * loading para definir el 
 * comportamiento de 
 * cada uno de ellos
 * @param {component} component 
 * @returns {HTMLElement}Lista de elementos dentro del header 
 */
function TodoHeader({ children, loading }) {
  return (
    <header>
      {
        React.Children
          .toArray(children)
          .map(child => React.cloneElement(child, { loading }))
      }
    </header>
  );
}

export { TodoHeader };
