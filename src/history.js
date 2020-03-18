// Dependency warning says to use: require("history").createBrowserHistory
// But doesn't explain how to do this for import.`
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

export default history;
