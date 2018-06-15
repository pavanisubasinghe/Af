import React, {Component} from 'react';
import  ReactDOM from 'react-dom';
import PavaniPage from './AppPavi';
import SuchiPage from './AppSuchi';

class main extends Component{
    loadPavani=()=>{
        ReactDOM.render(<PavaniPage/>,document.getElementById('root'));
    }
    loadSuchi=()=>{
        ReactDOM.render(<SuchiPage/>,document.getElementById('root'));
    }

    render(){
        return(
            <div>
                <form class="btn">
                    <button class="button" type="button" onClick={()=>{this.loadPavani()}}>Batch Information</button>
                    <button class="button" type="button" onClick={() => {this.loadSuchi()}}>Prescription Information</button>
                </form>

            </div>
        );
    }
}

