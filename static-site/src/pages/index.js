import React from "react";
import Layout from "../components/layout";

class IndexPage extends React.Component {
  state = {
    greeting: null
  };

  async componentDidMount() {
    const greeting = await fetch('/api/greeting');
    const greetingText = await greeting.text();
    this.setState({ greeting: greetingText });
  }

  render() {
    const { greeting } = this.state;
    return (
      <Layout>
        <h1>Hello world</h1>
        { greeting && <h2>{ greeting }</h2> }
      </Layout>
    );
  }
}

export default IndexPage;