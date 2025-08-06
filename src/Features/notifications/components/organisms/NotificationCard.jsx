import React from 'react';
import { ClockIcon } from '../../../../assets/Icons/SVG';

const NotificationCard = ({ notification }) => {
  return (
    <div className="card rounded-2 whiteBg p-3 w-100">
      <div className="d-flex">
        <div className="flex-grow-1">
          <div className="d-flex justify-content-between align-items-start">
            <div className="flex-grow-1">
              <h6 className="fw-bold">{notification.title}</h6>
              <p className="text-muted">{notification.subtitle}</p>
              <div className="d-flex justify-content-between align-items-center mt-2">
                {notification.time && (
                  <small className="d-flex align-items-center gap-2">
                    <ClockIcon /> {notification.time}
                  </small>
                )}
                {notification.showEta && (
                  <small className="text-primary fw-bold">{notification.eta}</small>
                )}
              </div>
            </div>
            {notification.hasReorder && (
              <button className="btn btn-dark btn-sm">Reorder</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
