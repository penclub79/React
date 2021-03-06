import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "../../store";

class AppContainer extends Component {
    state={
        message:'Hello'
    };

    render() {
        return (
            <Store.Provider value={this.state.message}>
                <AppPresenter />
            </Store.Provider>
        );
    }
}

export default AppContainer;