class IndecisionApp extends React.Component{
    render(){
        const title = "Indecision";
        const subtitle = "Can't make your mind up? let the computer decide for you."
        const options = ['things one', 'thing two', 'thing three'];
        return(
        <div>
            <Header title = {title} subtitle = {subtitle}/>
            <Action />
            <Options options = {options}/>
            <AddOption />
        </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.handlePick}> What should I do</button>
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
                {
                  this.props.options.map((option) => <Option key= {option} optionText ={option}/>)
                }
            </div>
        );
    }
}

class AddOption extends React.Component{
    render(){
        return(
            <div>
                <p>Component here</p>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch


