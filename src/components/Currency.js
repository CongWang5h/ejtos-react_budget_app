import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import './Currency.css'; // Import the CSS file

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: "CHG_CURRENCY",
            payload: val,
        });
    };

    return (
        // <div className="alert alert-secondary" style={{ display: "flex", alignItems: "center" }}>
            <div className="custom-dropdown-container">
                <span style={{ marginRight: "10px", fontWeight: "bold" }}>Currency:</span>
                {/* <div className="custom-select" style={{ border: "1px solid #ccc", borderRadius: "4px", overflow: "hidden" }}> */}
                <div className="custom-select">
                    <select
                        name="Currency"
                        id="Currency"
                        defaultValue={currency}
                        onChange={event => changeCurrency(event.target.value)}
                        style={{
                            padding: "8px",
                            outline: "none",
                            appearance: "none",
                            border: "none",
                            backgroundColor: "transparent",
                            cursor: "pointer",
                            width: "150px"
                        }}
                    >
                        <option value="$">$ Dollar</option>
                        <option value="£">£ Pound</option>
                        <option value="€">€ Euro</option>
                        <option value="₹">₹ Ruppee</option>
                    </select>
                </div>
            </div>
        // </div>
    );

};

export default Currency;
