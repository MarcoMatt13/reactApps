import "antd/dist/antd.css";
import AllExp from "./AllExp";
import FilterList from "./FilterList";
import classes from "./general.module.css";
import { Layout, Menu, Space } from "antd";
import { useEffect, useState } from "react";
import CategoriesList from "./CategoriesList";

const { SubMenu } = Menu;

const { Header, Footer, Sider, Content } = Layout;

const LayoutModel = () => {
  const dummy = [
    {
      id: "1",
      title: "This is a first exp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      description: "Id1, Padova, Comune di Padova",
      owners: "Comune di Padova",
      locations: "Padova",
    },
    {
      id: "2",
      title: "This is a second exp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",

      description: "Id2, Comune di Venezia, Venezia",
      owners: "Comune di Venezia",
      locations: "Venezia",
    },
    {
      id: "3",
      title: "This is a third exp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      description: "Id3, famiglia Panozzo, Dolomiti",
      owners: "Famiglia Panozzo",
      locations: "Dolomiti",
    },
    {
      id: "4",
      title: "This is a fourth exp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      description:
        "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
      owners: "Consorzio Agrario",
      locations: "Venezia",
    },
    {
      id: "5",
      title: "This is a fifth exp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      description:
        "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
      owners: "Comune di Venezia",
      locations: "Venezia",
    },
  ];

  const locations = ["Padova", "Venezia", "Dolomiti", "Treviso"];

  const owners = [
    "Comune di Venezia",
    "Famiglia Panozzo",
    "Comune di Padova",
    "Consorzio Agrario",
  ];

  const [locationslist, setLocationslist] = useState(locations);
  const [ownerslist, setOwnerslist] = useState(owners);

  const filteredExp =
    locationslist === locations && ownerslist === owners
      ? dummy
      : dummy
          .filter((el) => locationslist.includes(el.locations))
          .filter((el) => ownerslist.includes(el.owners));

  const filterLocations = (e) => {
    setLocationslist(e);
    console.log(e);
    if (e == "") {
      setLocationslist(locations);
    }
  };
  console.log(locationslist);

  const filterOwners = (e) => {
    setOwnerslist(e);
    if (e == "") {
      setOwnerslist(owners);
    }
  };
  console.log(ownerslist);

  return (
    <Layout>
      <Header className={classes.text}>TITOLO HEADER</Header>

      <Content style={{ padding: "0 50px" }}>
        <Layout>
          <Sider style={{ padding: "24px 0", background: "white" }}>
            <Menu mode="inline" style={{ height: "100%" }}>
              <SubMenu key="sub1" title="Location">
                <FilterList filterExp={filterLocations} contents={locations} />
              </SubMenu>
              <SubMenu key="sub2" title="Owner">
                <FilterList filterExp={filterOwners} contents={owners} />
              </SubMenu>
              <SubMenu key="sub3" title="Categories">
                <CategoriesList />
              </SubMenu>
            </Menu>
          </Sider>
          <Content>
            <AllExp elements={filteredExp} />
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
