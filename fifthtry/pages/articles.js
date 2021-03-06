import React, { Component } from 'react'
import Header from '../components/shared/Header'
import Axios from 'axios';
// import Link from 'next/link';
import { Link } from '../routes';
class articles extends Component {
    constructor() {
        super();
        this.state = {}
    }
    componentDidMount() {

    }
    componentDidUpdate() {

    }
    componentWillUnmount() {

    }
    renderArticle(data) {
        return data.map((article) => {
            return (
                <li key={article.id}>
                    <Link route={`/article/${article.id}`}>
                        <a>{article.title}</a>
                    </Link>
                </li>
            )
        });
    }
    render() {
        const { responseData } = this.props;
        return (
            <React.Fragment>
                <Header />
                <h1>Articles</h1>
                <ul>
                    {this.renderArticle(responseData.data)}
                </ul>
            </React.Fragment>
        )
    }

    static async getInitialProps() {
        let responseData = {};
        try {
            const response = await Axios.get('http://dev.amien.portfolio.local/articles');
            responseData = response.data;
        } catch (error) {
            console.error('error');
        }
        return {
            responseData
        }
    }
}
export default articles;