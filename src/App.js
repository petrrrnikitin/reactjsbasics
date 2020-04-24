import React, {Component} from 'react';
import './App.css';
import Car from "./Car/Car";

class App extends Component {

    state = {
        cars: [
            {name: 'Ferrari 599', year: 2020},
            {name: 'BMW M3 COUPE', year: 2005},
            {name: 'TOYOTA GT 86', year: 2015},
        ],
        pageTitle: 'React components',
        showCars: false
    };

    onChangeName(name, index) {
        const car = this.state.cars[index]
        car.name = name
        const cars = [...this.state.cars]
        cars[index] = car
        this.setState({cars})
    }
    handleInput = (event) => {
        this.setState({pageTitle: event.target.value})
    }
    deleteHandler(index) {
        const cars = this.state.cars.concat()
        cars.splice(index, 1)
        this.setState({cars})
    }
    toggleCarsHandler = () => {
        this.setState( {
            showCars: !this.state.showCars
        })
    }


    render() {
        const divStyle = {
            paddingTop: '100px'
        };

        let cars = null

        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <Car
                        key={index}
                        name={car.name}
                        year={car.year}
                        onDelete={this.deleteHandler.bind(this, index)}
                        onChangeName={event => this.onChangeName(event.target.value, index)}
                    />
                )
            })
        }

        return (
            <div style={divStyle} className="App">
                <h1 style={{fontSize: '50px', color: 'red'}}>{this.state.pageTitle}</h1>
                <input onChange={this.handleInput} value={this.state.pageTitle} type="text"/>
                <button onClick={this.toggleCarsHandler}>Toggle cars</button>
                {cars}
            </div>
        )
    }
}

export default App;
