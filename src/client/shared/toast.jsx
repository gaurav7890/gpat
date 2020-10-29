import React, { useState, useEffect } from 'react';
import '../../css/toast.scss';
import Constants from '../../core/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Toast = props => {
  const { toastList } = props;
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, Constants.TOAST_TIMEOUT);

    return () => {
      clearInterval(interval);
    }

    // eslint-disable-next-line
  }, [toastList, list]);

  const deleteToast = id => {
    const listItemIndex = list.findIndex(e => e.id === id);
    const toastListItem = toastList.findIndex(e => e.id === id);
    list.splice(listItemIndex, 1);
    toastList.splice(toastListItem, 1);
    setList([...list]);
  }

  return (
    <>
      <div className="notification-container top-right">
        {list.map((toast, i) =>
          <div
            key={i}
            className={`notification toast top-right ${toast.type}`}
          >
            <button className="close-button" onClick={() => deleteToast(toast.id)}>
              <FontAwesomeIcon icon="times"/>
            </button>
            <div className="toast-icon">
              <FontAwesomeIcon icon={`${toast.iconName}`}/>
            </div>
            <div>
              <p className="notification-title">{toast.title}</p>
              <p className="notification-message">
                {toast.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Toast;
