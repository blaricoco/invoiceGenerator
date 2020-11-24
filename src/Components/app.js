import React from 'react';
import LoadHomepage from './LoadHomePage';
import LoadCreateInvoice from './LoadCreateInvoice';
import LoadUpdateInvoice from './LoadUpdateInvoice';
import LoadDisplayInvoice from './LoadDisplayInvoice';
import LoadAllInvoices from './LoadAllInvoices';
import LoadPageNotFound from './LoadPageNotFound';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';


export default class App extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <BrowserRouter>
            <Switch>
                <Route exact path = '/'>
                    <LoadHomepage/>
                </Route>
                <Route path ='/createinvoice'>
                    <LoadCreateInvoice/>
                </Route>
                <Route path = '/updateinvoice'>
                    <LoadUpdateInvoice/>
                </Route>
                <Route path = '/displayinvoice'>
                    <LoadDisplayInvoice/>
                </Route>
                <Route path= '/allinvoices'>
                    <LoadAllInvoices/>
                </Route>
                <Route>
                    <LoadPageNotFound/>
                </Route>
            </Switch>
            </BrowserRouter>
        );
    }
}