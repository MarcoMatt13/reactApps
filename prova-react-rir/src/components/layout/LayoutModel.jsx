import SingleExp from "../SingleExp";
import { Layout } from "antd";
import "antd/dist/antd.css";
import Grid from "./Grid";
import FilterList from "./FilterList";
import classes from "./prova.module.css";

const { Header, Footer, Sider, Content } = Layout;

const LayoutModel = () => {
  return (
    <Layout>
      <Sider>
        <FilterList />
      </Sider>
      <Layout>
        <Header className={classes.text}>TITOLO HEADER</Header>
        <Content>
          <Grid></Grid>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutModel;