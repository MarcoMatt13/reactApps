import "antd/dist/antd.css";
import Grid from "./Grid";
import FilterList from "./FilterList";
import classes from "./prova.module.css";
import { Layout, Menu } from "antd";
import { useState } from "react";

const { SubMenu } = Menu;

const { Header, Footer, Sider, Content } = Layout;

const LayoutModel = () => {
  const dummy = [
    {
      id: "1",
      title: "This is a first exp",
      image:
        "https://sognienumeri.it/wp-content/uploads/2019/02/Numero-1-300x300.png",
      description:
        "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    },
    {
      id: "2",
      title: "This is a second exp",
      image: "https://media.leroymerlin.it/media/233565/.jpg",
      description:
        "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    },
    {
      id: "3",
      title: "This is a third exp",
      image:
        "https://cdn.xxl.thumbs.canstockphoto.it/3-nero-pulito-3d-isolato-numero-bianco-archivio-fotografico_csp60215704.jpg",
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

  const filteredExp =
    experiences === "all"
      ? dummy
      : dummy.filter((dummy) => dummy.id.includes(experiences));

  const filterExp = (e) => {
    setExperiences(e.target.value);
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
            <Grid elements={filteredExp} />
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
