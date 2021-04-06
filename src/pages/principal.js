import { React, Component } from 'react';
import AllGifs from '../components/AllGifs';

class Principal extends Component {

    constructor() {
        super();
        this.state = {
            loading: true,
            gifs: []
        }
    }

    componentDidMount() {
        fetch("https://api.giphy.com/v1/gifs/trending?api_key=dSc1y0Zte8200HrqTSnSG5Mc5Mi1n8GG&limit=5&rating=g")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    gifs: data.data
                })
            })
    }

    render() {
        return (
            <div>
                <h1>Página principal</h1>
                { this.state.loading && <img src="/loading.gif" alt="loading" />}

                {
                    !this.state.loading && this.state.gifs.map(gif => {
                        return (
                            <AllGifs gif={gif.images.original.url} id={gif.id} />
                        )
                    })
                }
            </div>
             
        )
    }
}


export default Principal;