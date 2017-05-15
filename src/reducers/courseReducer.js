import { CREATE_COURSE } from "../actions/types";

export default function(state = [], action) {
    switch (action.type) {
        case CREATE_COURSE:
            return [
                action.payload, ...state
            ];
    }
    return state;
}
