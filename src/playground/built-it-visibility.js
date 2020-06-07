class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handletoggleVisibility = this.handletoggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handletoggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render() {
        return (
            <div>

                <div>
                    <h1>Visibility Toggle</h1>
                    <button onClick={this.handletoggleVisibility}>
                        {this.state.visibility ? 'Hide Details' : 'Show Details'}
                    </button>
                    {this.state.visibility && (
                        <p>Details</p>
                    )}
                </div>

                {/* <h1>Toggle Visibility</h1>
                <button onClick={this.toggleVisibility}>Toggle</button> */}
            </div>
        )
    }
}









// let visibility = false;
// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();

// }
// const render = () => {
// const jsx = (

// );

ReactDOM.render(<Visibility />, document.getElementById('app'))
// };

// render();