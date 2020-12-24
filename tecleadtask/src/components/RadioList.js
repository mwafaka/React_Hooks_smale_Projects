import React, { useState, useEffect } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import axios from "axios";

const RadioList = () => {
  const [state, setState] = useState({
    radioList: [],
    activeRadio: null,
    counter: null
  });

  useEffect(async () => {
    let response = await axios.get("https://teclead.de/recruiting/radios");

    setState({ ...state, radioList: response.data.radios });
  }, []);

  const setRadioActive = id => {
    state.radioList.forEach((radio, index) => {
      if (id === radio.frequency) {
        setState({ ...state, activeRadio: radio, counter: index });
      }
    });
  };

  const goBack = () => {
    setState({ ...state, activeRadio: null, counter: null });
  };

  const nextStation = () => {
    if (state.counter < state.radioList.length - 1) {
      setState({
        ...state,
        counter: state.counter + 1,
        activeRadio: state.radioList[state.counter + 1]
      });
    }
  };
  const prevStation = () => {
    if (state.counter > 0) {
      setState({
        ...state,
        counter: state.counter - 1,
        activeRadio: state.radioList[state.counter - 1]
      });
    }
  };
  return (
    <div className="container">
      <Header goBack={goBack} />
      <div className="radio-list">
        {state.radioList.map(radio => {
          return (
            <div key={radio.frequency}>
              {state.activeRadio &&
              state.activeRadio.frequency === radio.frequency ? (
                <div className="radio-detail">
                  <button onClick={prevStation}>-</button>

                  <img src={radio.image} alt={radio.name} />
                  <button onClick={nextStation}>+</button>
                </div>
              ) : null}
              <div
                onClick={setRadioActive.bind(this, radio.frequency)}
                className="radio-item"
              >
                <h5>{radio.name}</h5>
                <h5>{radio.frequency}</h5>
              </div>
            </div>
          );
        })}
      </div>
      <div className="leave-sapce">
        <Footer
          activeRadioHandler={
            state.counter !== null ? state.activeRadio.name : null
          }
        />
      </div>
    </div>
  );
};

export default RadioList;
