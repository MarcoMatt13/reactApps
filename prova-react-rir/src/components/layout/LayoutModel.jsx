import "antd/dist/antd.css";
import Grid from "./Grid";
import FilterList from "./FilterList";
import classes from "./prova.module.css";
import { Layout, Menu } from "antd";
import { useState } from "react";

const { SubMenu } = Menu;

const { Header, Footer, Sider, Content } = Layout;

const LayoutModel = (props) => {
  const dummy = [
    {
      id: "1",
      title: "This is a first exp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      description:
        "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    },
    {
      id: "2",
      title: "This is a second exp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      description:
        "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    },
    {
      id: "3",
      title: "This is a third exp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      description:
        "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    },
    {
      id: "4",
      title: "This is a fourth exp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      description:
        "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    },
    {
      id: "5",
      title: "This is a fifth exp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      description:
        "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    },
  ];

  const [experiences, setExperiences] = useState("all");
  console.log(experiences);

  const filterExp = () => {
    this.setExperiences((experiences) => true);
  };

  return (
    <Layout>
      <Header className={classes.text}>TITOLO HEADER</Header>

      <Content style={{ padding: "0 50px" }}>
        <Layout>
          <Sider style={{ padding: "24px 0", background: "white" }}>
            <Menu mode="inline" style={{ height: "100%" }}>
              <SubMenu key="sub1" title="subnav 1">
                <FilterList filterExp={filterExp} />
              </SubMenu>
              <SubMenu key="sub2" title="subnav 2">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title="subnav 3">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content>
            <Grid onFilter={filterExp} elements={dummy} />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Footer prova React app RIR
      </Footer>
    </Layout>
  );
};

export default LayoutModel;
