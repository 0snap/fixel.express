import keyMirror from 'key-mirror';

const ACTIONS = keyMirror({
	INSERT_TOKEN: null,
	INSERT_TOKEN_SUCCESS: null,
	INSERT_TOKEN_ERROR: null,
	NEW_GAME: null,
	NEW_GAME_SUCCESS: null,
	NEW_GAME_ERROR: null,
	CALL_API: null,
	GET_LANGUAGE: null,
	GET_LANGUAGE_SUCCESS: null,
	GET_LANGUAGE_ERROR: null
});

export default ACTIONS;