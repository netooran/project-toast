import * as React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToast] = React.useState([]);

  function createToast(message, variant) {
    setToast([...toasts, { id: crypto.randomUUID(), message, variant }]);
  }

  function dismissToast(id) {
    setToast(toasts.filter((toast) => toast.id !== id));
  }

  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export const useToast = () => React.useContext(ToastContext);

export default ToastProvider;
