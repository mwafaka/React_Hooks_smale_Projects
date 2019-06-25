import React, { Component } from "react";
import "./App.css";
import AlgoliaPlaces from "algolia-places-react";

class App extends Component {
  selectAddressHandler = (rawAnswer, suggestion) => {
    console.log(suggestion);
    let location = "";
    if (suggestion.name) {
      location = suggestion.name;
    }
    if (suggestion.administrative) {
      location += ", " + suggestion.administrative;
    }
    if (suggestion.city) {
      location += ", " + suggestion.city;
    }
    if (suggestion.country) {
      location += ", " + suggestion.country;
    }
    // console.log(location);
    this.setState({
      location: location,
      lnglat: [suggestion.latlng.lat, suggestion.latlng.lng]
    });
    console.log(location, "\n", suggestion.latlng.lat, suggestion.latlng.lng);
  };
  render() {
    return (
      <div className="App">
        {/* write your comment here... */}
        <h1>Enter a location:</h1>
        {/* this part is to get location address by selecting one of the suggestions */}
        <AlgoliaPlaces
          placeholder="Write an address here"
          options={{
            appId: "plV7FOH0L4TX",
            apiKey: "5f07d771e38fc7ec02c89334c69d8fa1"
          }}
          onChange={({ query, rawAnswer, suggestion, suggestionIndex }) =>
            this.selectAddressHandler(rawAnswer, suggestion)
          }
          onSuggestions={({ rawAnswer, query, suggestions }) =>
            console.log(
              "You will receive the array of suggestions that are displayed."
            )
          }
        />
      </div>
    );
  }
}

export default App;
