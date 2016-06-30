import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './to_do_components/reducers'
import App from './to_do_components/app'

let store = createStore(todoApp,{}, window.devToolsExtension?window.devToolsExtension():{})

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('blabla')
)