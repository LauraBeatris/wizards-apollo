import React from 'react'
import { Route, Switch } from 'react-router-dom'

import appRoutes from './appRoutes'

export function Router () {
  return (
    <Switch>
      {appRoutes.map(route => (
        <Route
          key={route.path}
          {...route}
        />
      ))}
    </Switch>
  )
};

export default Router
