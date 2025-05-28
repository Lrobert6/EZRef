import React from 'react';

const StepCard = ({ Icon, text, iconOnLeft = true }) => {
  return (
    <div className='large-card' style={{ marginTop: '1rem' }}>
      <div style={{ display: 'flex', flexDirection: 'row', margin: '1rem' }}>
        {iconOnLeft && <Icon color="#3B413C" size="10rem" />}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: '1.5rem', margin: '0 1rem' }}>{text}</p>
        </div>
        {!iconOnLeft && <Icon color="#3B413C" size="10rem" />}
      </div>
    </div>
  );
};

export default StepCard;
