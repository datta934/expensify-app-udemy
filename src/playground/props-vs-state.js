
// Method Binding 'bind'
// const obj = {
//     name: 'Mauaa',
//     getName() {
//         return this.name;
//     }
// }

// const getName = obj.getName.bind({ name: 'Sourabh' });

// console.log(getName());

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        });
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option);

    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid valule';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => {
            // prevState.options.push(option);
            return {
                options: prevState.options.concat([option])
            }
        })
    }
    render() {
        const title = "Tndecision App"
        const subtitle = "My first react app!"
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h1>{this.props.subtitle}</h1>
            </div>);
    }
}

class Action extends React.Component {

    // handlePick() {
    //     console.log("Click");
    // }
    render() {
        return <div>
            <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>

                What should I do?
            </button>
        </div>;
    }
}



class Options extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
    // }
    // handleRemoveAll() {
    //     console.log(this.props.options);
    //     //  alert("Remove all");
    // }
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove all</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>

        );
    }
}

class Option extends React.Component {

    render() {
        return (
            <div>
                Option:  {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        // if (option) {
        //     // alert(option);
        //     this.props.handleAddOption(option);
        // }
        this.setState(() => {
            return {
                error
            };
        });
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button >Add Option</button>
                </form>
            </div>
        );
    }
}

// const jsx = (
//     <div>
//         <h1>title</h1>
//         <Header />
//         <Action />
//         <Options />
//         <FormAdd />
//     </div>
// );

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));