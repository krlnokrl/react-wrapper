import {Component} from "react";

class Pinger extends Component {

    state = {answer: ''}

    componentDidMount() {
        fetch('https://httpbin.org/get')
            .then(res => res.json())
            .then(res => {
                this.setState({ answer: res['url'] })
            })
            .catch(console.log)
    }

    getStatus(){
        if(this.state.answer === ''){
            return(<>Making a request, Please wait ❔</>);
        }else{
            return(<>
                Server status: OK ✔️
                <div className="card bg-secondary mt-4">
                    <div className="card-body">{JSON.stringify(this.state.answer)}</div>
                    </div>
            </>);
        }
    }

    render() {
        return(
            <>
                {this.getStatus()}
            </>
        );
    }
}
export default Pinger;