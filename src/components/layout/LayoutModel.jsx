import "antd/dist/antd.css";
import FilterList from "./FilterList";
import classes from "./general.module.css";
import { Layout, Menu } from "antd";
import { useState } from "react";
import CategoriesList from "./CategoriesList";
import AllExpList from "./AllExpList";
import AllExp from "./AllExp";
import {
  PushpinOutlined,
  UserOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const { Header, Footer, Sider, Content } = Layout;

const LayoutModel = () => {
  const dummy = [
    {
      id: "1",
      title: "This is the first exp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      description: "id1, Comune di Padova, Padova",
      owner: "Comune di Padova",
      location: "Padova",
      category: "Bar",
    },
    {
      id: "2",
      title: "This is the second exp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",

      description: "id2, Comune di Venezia, Venezia",
      owner: "Comune di Venezia",
      location: "Venezia",
      category: "Bar",
    },
    {
      id: "3",
      title: "This is the third exp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      description: "id3, famiglia Panozzo, Dolomiti",
      owner: "Famiglia Panozzo",
      location: "Dolomiti",
      category: "Ristorante di Montagna",
    },
    {
      id: "4",
      title: "This is the fourth exp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      description: "id4, Consorzio agrario, Venezia",
      owner: "Consorzio Agrario",
      location: "Venezia",
      category: "Rifugio",
    },
    {
      id: "5",
      title: "This is the fifth exp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      description: "id5, Comune di Venezia, Venezia",
      owner: "Comune di Venezia",
      location: "Venezia",
      category: "Hotel",
    },
    {
      id: "6",
      title: "This is the sixth exp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      description: "id6, Comune di Venezia, Famiglia Panozzo",
      owner: "Famiglia Panozzo",
      location: "Venezia",
      category: "Baita privata",
    },
  ];

  const treeData = [
    {
      title: "Alloggi",
      key: "Alloggi",
      children: [
        {
          title: "Hotel",
          key: "Hotel",
        },
        {
          title: "Garni",
          key: "Garni",
        },
        {
          title: "Pensione",
          key: "Pensione",
        },
      ],
    },
    {
      title: "Baite e Rifugi",
      key: "Baite e Rifugi",
      children: [
        {
          title: "Baita di montagna",
          key: "Baita di montagna",
        },
        {
          title: "Rifugio",
          key: "Rifugio",
        },
        {
          title: "Baita privata",
          key: "Baita privata",
        },
      ],
    },
    {
      title: "Ristorazione",
      key: "Ristorazione",
      children: [
        {
          title: "Bar",
          key: "Bar",
        },
        {
          title: "Ristorante di Montagna",
          key: "Ristorante di Montagna",
        },
        {
          title: "Ristorante con giardino",
          key: "Ristorante con giardino",
        },
      ],
    },
  ];

  // const for filtering
  const locations = [...new Set(dummy.map((item) => item.location))];
  const owners = [...new Set(dummy.map((item) => item.owner))];
  const categories = [...new Set(dummy.map((item) => item.category))];

  const [locationsList, setLocationsList] = useState(locations);
  const [ownersList, setOwnersList] = useState(owners);
  const [categoriesList, setCategoriesList] = useState(categories);

  // support constants for categories
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  // functions for locations and owners filters
  const filterLocations = (e) => {
    setLocationsList(e);
    console.log(e);
    if (!e.length) {
      setLocationsList(locations);
    }
  };
  console.log(locationsList);

  const filterOwners = (e) => {
    setOwnersList(e);
    if (!e.length) {
      setOwnersList(owners);
    }
  };
  console.log(ownersList);

  // function for categoriesList
  const onExpand = (expandedKeysValue) => {
    console.log("onExpand", expandedKeysValue);
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck = (checkedKeysValue) => {
    setCategoriesList(checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
    if (!checkedKeysValue.length) {
      setCategoriesList(categories);
    }
  };
  console.log(categoriesList);

  // filtered element to pass to AllExp
  const filteredExp =
    locationsList === locations &&
    ownersList === owners &&
    categoriesList === categories
      ? dummy
      : dummy
          .filter((el) => locationsList.includes(el.location))
          .filter((el) => ownersList.includes(el.owner))
          .filter((el) => categoriesList.includes(el.category));

  return (
    <Layout style={{ padding: "0 20px", minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
      >
        <div className={classes.logo}>LOGO</div>
        <Menu theme="dark" mode="inline" style={{ height: "100%" }}>
          <SubMenu key="sub1" title="Locations" icon={<PushpinOutlined />}>
            <FilterList filterExp={filterLocations} contents={locations} />
          </SubMenu>
          <SubMenu key="sub2" title="Owners" icon={<UserOutlined />}>
            <FilterList filterExp={filterOwners} contents={owners} />
          </SubMenu>
          <SubMenu
            key="sub3"
            title="Loc. Categories"
            icon={<ApartmentOutlined />}
          >
            <CategoriesList
              treeData={treeData}
              onExpand={onExpand}
              onCheck={onCheck}
              checkedKeys={checkedKeys}
              expandedKeys={expandedKeys}
              autoExpandParent={autoExpandParent}
            />
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header className={classes.header}>TITOLO HEADER</Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <AllExpList elements={filteredExp} />
        </Content>
        <Footer className={classes.footer}>Footer prova React app RIR </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutModel;
