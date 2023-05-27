import React from "react";
import "./InfoTooltip.css";
import ok from "../../images/ok.svg";
import err from "../../images/err.svg";

function InfoTooltip({ isOpen, isOk, onClose, message }) {
  return (
    <div className={`info ${isOpen ? "info_is-open" : ""}`}>
      <div className="info__content">
        <button type="button" onClick={onClose} className="info__close" />
        <img src={isOk ? ok : err} alt={isOk ? "ok" : "error"}></img>
        <h3 className="info__title">{message}</h3>
      </div>
    </div>
  );
}

export default InfoTooltip;
