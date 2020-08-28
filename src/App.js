import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import { StateContextProvider } from '_contexting/context'
import { Routes } from 'components/pages/routes'

import { ThemeProvider } from 'styled-components'
import { Theme } from 'config/theme'
import { GlobalStyles } from './global.styles'

export const App = () => (
  <>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <StateContextProvider>
        <Router>
          {Routes.map(({ Component, redirect, ...routeData }) => (
            <Route key={routeData.path} {...routeData}>
              { redirect && <Redirect to={redirect.to} /> }
              { Component && <Component /> }
            </Route>
          ))}
        </Router>
      </StateContextProvider>
    </ThemeProvider>
  </>
)