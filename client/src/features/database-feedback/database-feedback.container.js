import { connect } from "react-redux";
import { DatabaseFeedback } from "./database-feedback.component";

const mapStateToProps = state => ({
	success:state.locationRatingReducer.features
});

export const DatabaseFeedbackContainer = connect(mapStateToProps)(DatabaseFeedback);
