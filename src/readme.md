# notes for react

* to make the class based component 

    import React, { Component } from "react";

    class App extends Component{
        render(){
            return(
                <div>
                </div>
            );
        }
    }

* whatever we use inside the return html like structure is called as jsx

* inside the jsx if you want to write the javascript you can add inside the { }

* by using the class component
* state is a javascript object with properties that we can access at any point inside our class
* to use this you have to use super that will give you access to this.state
* class component also gives us the method setState and it lets us modefy this set object it gives us the method called onClick

        for example:
        onClick={() => this.setState({ string: "message" })}

* you can only modify the state by calling the this.setState()

* to add css by class we use the term className insted of class because we already use the class for building the class based component


## our first on button click change exercise

        import React, { Component } from "react";
        import './App.css';

        const string2 = "this is the message inside the string2";

        class App extends Component {
        constructor(){
            super();

            this.state = {
            string: "this is inside the state state"
            }
        }

        render() {
            return (
            <div>
                <p>{this.state.string}</p>
                <button onClick={() => this.setState({ string: "message = "+string2 })}>change text</button>
            </div>
            );
        }
        }

        export default App;


## Component :

        import React, { Component } from "react";

we import the Component for using the class based component
render() method comes with the Component


# life cycle method

## componentDidMount :

mounting means when the react put our component on the browser for the first time it calls whatever block of code inside the componentDidMount(){}

