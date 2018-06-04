import React from 'react'
import { Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '../../routes'

import './Main.css';

const Main = () => (
	<main>
		<Switch>
			{renderRoutes(routes)}
		</Switch>
	</main>
)

export default Main