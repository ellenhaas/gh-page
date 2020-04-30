import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

export default class Head extends Component {
    render() {
        return (
            <Helmet>
                <meta charSet="UTF-8" />
                <title>Ellen Haas</title>
                <meta name="author" content="Ellen Haas" />
            </Helmet>
        )
    }
}