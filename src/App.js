import "./style.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Counter from "./counter";
import Start from "./Start";


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Start />
                </Route>
                <Route exact path="/Counter">
                    <Counter />
                </Route>
            </Switch>
        </BrowserRouter>

    );
}

export default App;

