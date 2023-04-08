import React, { Component } from 'react';
import { GoogleApiWrapper, Autocomplete } from 'google-maps-react';

class AutocompleteInput extends Component {
  constructor(props) {
    super(props);
    this.autocomplete = null;
    this.onPlaceSelected = this.onPlaceSelected.bind(this);
  }

  onPlaceSelected(place) {
    console.log(place);
  }

  render() {
    return (
      <Autocomplete
        placeholder="Enter a location"
        onPlaceSelected={this.onPlaceSelected}
        types={['(regions)']}
        componentRestrictions={{ country: 'in' }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyClAO6xvWenYPgtVrJavel5C6xjP0sYiHs',
})(AutocompleteInput);
