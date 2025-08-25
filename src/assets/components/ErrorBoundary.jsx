import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Algo salió mal. Intenta recargar.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
