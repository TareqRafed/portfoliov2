import axios from 'axios';
import React, { useEffect, useState } from 'react';

import ShadowText from '../../components/ShadowText/ShadowText';
import style from './Contact.module.scss';

const empty = {
  email: '',
  subject: '',
  message: '',
};

const Contact = () => {
  // Server State Handling
  const [inputs, setInputs] = useState(empty);
  const [disabled, setDisabled] = useState(false);
  const [err, setError] = useState(false);
  const [succ, setSucc] = useState(true);

  useEffect(() => {
    setError(false);
    setSucc(false);
    setInputs(empty);
  }, []);

  const handleOnChange = (event: {
    persist: () => void;
    target: { id: any; value: any };
  }) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleOnSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setDisabled(true);
    axios({
      method: 'POST',
      url: 'https://formbold.com/s/6l7eo',
      data: inputs,
    })
      .then(() => {
        setInputs(empty);
        setDisabled(false);
        setSucc(true);
      })
      .catch(() => {
        setDisabled(false);
        setError(true);
        setSucc(false);
      });
  };

  return (
    <div className={style.container}>
      <div>
        <h3>
          <ShadowText text="Shoot your E-mail" />
        </h3>
      </div>
      <div className={style.fail}>
        {err && <p>Something went wrong, Please try again later</p>}
      </div>
      <div className={style.succ}>{succ && <p>GOT IT! Thanks for reaching out.</p>}</div>
      <form className={style.form} onSubmit={handleOnSubmit}>
        <input
          disabled={disabled}
          onChange={handleOnChange}
          value={inputs.email}
          id="email"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          disabled={disabled}
          onChange={handleOnChange}
          value={inputs.subject}
          id="subject"
          type="text"
          name="subject"
          placeholder="Subject"
        />
        <textarea
          disabled={disabled}
          onChange={handleOnChange}
          value={inputs.message}
          id="message"
          name="message"
          placeholder="Type your message"
        />
        <button disabled={disabled} type="submit">
          {' '}
          Send Message{' '}
        </button>
      </form>
    </div>
  );
};

export default Contact;
