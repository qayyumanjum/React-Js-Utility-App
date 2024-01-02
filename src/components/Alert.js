import React from 'react';

function Alert(props) {
  return (
     (
      <>
      <div style={{height:'30px'}}>
      {props.alert && <div className={`alert ${props.alert.type ? `alert-${props.alert.type}` : ''} d-flex align-items-center`} role="alert" style={{ width: 'auto', height: '2em' }}>
        <svg xmlns="http://www.w3.org/2000/svg" className="bi flex-shrink-0 me-2" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" aria-label="Success:">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg>
        <div>
          {props.alert.msg}
        </div>
      </div>}
      </div>
      </>
    )
  );
}

export default Alert;