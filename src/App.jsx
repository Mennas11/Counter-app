
// Build a Counter App using a Class Component
//The app displays a number and has 3 buttons: Increment,
//Decrement, and Reset.

//class component = outdated way , w lazm nstkhdm render 3shan yrg3lna UI unlike el functional component bnst3ml m3aha el Hooks



import { Component } from "react";
import "./App.css";
class App extends Component {  // 3mlna class esmo App w hnstakhdmo k component

    state = {
    count: 0
  };

  increment() { // method bt3ml increment
  this.setState({ // bttlob el new value mn el state
    count: this.state.count + 1 // btakhod value el state w t3mlha +1
  });
}

  decrement() { // method bt3ml decrement
  this.setState({ // bttlob el new value mn el state
    count: this.state.count -1 // btakhod value el state w t3mlha -1
  });
}

  reset() { // method bt3ml increment
  this.setState({ // bttlob el new value mn el state
    count:0 // e3mleeli el count = 0
  });
}

  

  
  render() { // el Ui yo3od ytghayr aw yt3mlo update
    return (
        <div className="app-container">
        <div className="counter-card">
        <h1>Counter App</h1>
        <h2>Count: {this.state.count}</h2> 
        {/* this.state.count btgeeb el current value bta3t el count mn el state */}
      
      <button onClick={() => this.increment()}>
         Increment
      </button>

        <button onClick={() => this.decrement()}>
         Decrement
      </button>
      <button onClick={() => this.reset()}>
         Reset
      </button>
      </div>
      </div>
    );
  }
}

export default App;




//1. we created class component called App
//2. we created state object with property: count w khaleena el count ybd2 mn 0
//3. we used the this.state.count to display the current value of count in the UI
//4. we created 3 methods: increment, decrement, and reset to update the state of count
//5. we used the this.setState() method to update the state of count
//6. We linked the button with the event of clicking