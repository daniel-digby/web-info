import {
	START_TIMER,
	RESET_TIMER,
} from "../../redux/EditTimer/editTimer.types";

export const startTimer = (date) => ({
	type: START_TIMER,
	payload: date,
});

export const resetTimer = () => ({
	type: RESET_TIMER,
});
