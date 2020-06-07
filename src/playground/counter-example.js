
//Using component state

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinus = this.handleAddOne.bind(this);
        this.handleReset = this.handleAddOne.bind(this);
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10);
            if (!isNaN(count)) {
                this.setState(() => ({ count }));
            }
        }
        catch (e) {
            //do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count)
        }
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    //Not oworking 
    // handleMinusOne() {
    //     this.setState((prevState) => {
    //         return {
    //             count: prevState.count - 1
    //         }
    //     });
    //     console.log("minus");
    // }
    // handleReset() {
    //     this.setState((prevState) => {
    //         return {
    //             count: 0
    //         }
    //     });
    //     console.log("reset");
    // }


    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}
// Counter.defaultProps = {
//     count: 0
// }
ReactDOM.render(<Counter count={-10} />, document.getElementById('app'));

//Create three methods: handleAddOne,handleMinusOne, handleReset

















// let count = 0;
// const temp = "myid";

// const addOne = () => {
//     count++;
//     renderCounterApp();// kind of inefficient since dom gets loaded everytime
// }
// const minuOne = () => {
//     count--;
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }
// var appRoot = document.getElementById('app');
// const renderCounterApp = () => {
//     var templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             {/* short way */}
//             {/* <button onClick={() => console.log("hi")} id="{temp}" className="button">+1</button> */}
//             <button onClick={addOne}>+1</button>
//             <button onClick={minuOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     )


// };

// renderCounterApp();