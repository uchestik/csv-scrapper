import React,{Component} from 'react'
import Griddle, { plugins, RowDefinition, ColumnDefinition} from 'griddle-react';



class App extends Component{
    constructor(props){
        super(props);

        this.state={
            data:[]
        }
    }

    
    displayTable = (props)=>{
        const data = this.state.data;
        fetch(`http://localhost:5000/api/csv`,{method:'GET'})
        .then(res=>res.json())
        .then(list=>{this.setState({data:list})});

           if(data.length > 0){
            //    console.log(data)
            return (
                <div>
                    hello
                    <Griddle
    data={data}
    plugins={[plugins.LocalPlugin]}
  />
                </div>
            )
           }
        };

    
    
    
    
    render(){
        return(
            <div className='container'>
                {this.displayTable(this.props)}
                
            </div>
        )
    }
}

export default App;

