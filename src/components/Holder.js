import React, { useState } from "react";
import t from "prop-types";
import TextField, { Input } from "@material/react-text-field";

const noop = () => {};
const Holder = ({
  itemPrice = 175,
  name = "",
  email = "",
  id = "",
  removeHolder = noop,
  showRemoveButton = false,
}) => {
  const [nameInput, setName] = useState(name);
  const [emailInput, setEmail] = useState(email);
  const setter = (set) => (e) => {
    const { target } = e;
    const { value } = target;
    set(value);
  };
  return (
    <div className="row">
      <div className="holder">
        <div className="holder-name">
          <TextField label="Name">
            <Input value={nameInput} onChange={setter(setName)} required />
          </TextField>
        </div>
        <div className="holder-email">
          <TextField label="Email">
            <Input
              value={emailInput}
              onChange={setter(setEmail)}
              type="email"
              required
            />
          </TextField>
        </div>
        {showRemoveButton && (
          <button
            className="remove-holder"
            aria-label="Remove membership"
            onClick={(e) => {
              e.preventDefault();
              removeHolder(id);
            }}
          >
            ×
          </button>
        )}
      </div>
      <div className="line-item-price">${itemPrice}</div>
      <style jsx>{`
      p {
        color: red;
      }
    `}</style>
    </div>
  );
};
Holder.propTypes = {
  name: t.string,
  email: t.string,
  itemPrice: t.number,
  id: t.string,
  removeHolder: t.func,
  showRemoveButton: t.bool,
};
export default Holder;
