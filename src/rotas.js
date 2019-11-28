import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './paginas/main';
import Colaboradores from './paginas/colaboradores';
import Adicionar from './paginas/AdicionarColaborador';

const Rotas = () => (
    <BrowserRouter> 
        <Switch> 
            <Route exact path="/" component={Main} />
            <Route path="/colaboradores/:id" component={Colaboradores} />
            <Route path="/adicionarcolaborador" component={Adicionar} />
        </Switch>
    </BrowserRouter>
)

export default Rotas;