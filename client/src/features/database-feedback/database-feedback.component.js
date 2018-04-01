import React from "react";
import Toast from "../../ui-kit/toast";

export const DatabaseFeedback = (props) => {
	if (props.success > 0) {
 	 	return <Toast type="success">Thank you for submitting a review for The Delights of China!</Toast>
	} else {
		return <Toast type="error">Sorry, there seems to be a network error. Make sure you're online and try submitting again.</Toast>  
	}
};

 