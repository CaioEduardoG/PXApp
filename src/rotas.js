import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './paginas/main';
import Colaboradores from './paginas/colaboradores';
import Adicionar from './paginas/AdicionarColaborador';
import Healthcheck from './paginas/Healthcheck';

const Rotas = () => (
    <BrowserRouter> 
        <Switch> 
            <Route exact path="/" component={Main} />
            <Route path="/colaboradores/:id" component={Colaboradores} />
            <Route path="/adicionarcolaborador" component={Adicionar} />
            <Route path="/healthcheck" component={Healthcheck} />
        </Switch>
    </BrowserRouter>
)

export default Rotas;