import "../styles/globals.css";
import "react-notifications-component/dist/theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactNotification from "react-notifications-component";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ReactNotification />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
