import React from "react";
import { Toast } from "../../ui-kit/toast";

export const DbFeedback = (
// {
//   fetchLocations,
//   updateSearchInput,
//   inputValue,
//   textSearch,
//   toggleAutoComplete,
//   userLocation
// }
) => {

  // const handleClick = event => {
  //   textSearch(inputValue, userLocation.lat, userLocation.lon);
  //   updateSearchInput("");
  //   toggleAutoComplete(false);
  // };

  // return (
  //   <SearchContainer>
  //     <Input
  //       onChange={handleChange}
  //       placeholder="Location Name"
  //       value={inputValue}
  //     />
  //     <SearchButton onClick={handleClick}>Search</SearchButton>
  //   </SearchContainer>
  // );

  return (
		<Toast type="success">Thank you for submitting a review for The Delights of China!</Toast>

  );
};
		//<Toast error>Sorry, there seems to be a network error. Make sure you're online and try submitting again.</Toast>  

 