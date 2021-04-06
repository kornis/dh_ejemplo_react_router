import { React, Component } from 'react';

class DetalleGif extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            gif: {}
        }
    }

    componentDidMount() {
        fetch(`https://api.giphy.com/v1/gifs/${this.props.match.params.id}?api_key=dSc1y0Zte8200HrqTSnSG5Mc5Mi1n8GG`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    gif: data.data
                })
            })
    }

    render() {
        if(this.state.loading){
            return <h1>Cargando</h1>
        }
        return (
            
        <div>
            <h1>Detalle gif</h1>
            <h3>Title: {this.state.gif.title} </h3>
            <img src={this.state.gif.images.original.url} alt="gif" />
        </div>
    
            
        )
}
}

export default DetalleGif;