import "antd/dist/antd.css";
import AllExp from "./AllExp";
import FilterList from "./FilterList";
import classes from "./general.module.css";
import { Layout, Menu, Space } from "antd";
import { useEffect, useState } from "react";
import CategoriesList from "./CategoriesList";
import AllExpList from "./AllExpList";
const { SubMenu } = Menu;

const { Header, Footer, Sider, Content } = Layout;

const LayoutModel = () => {
  const dummy = [
    {
      id: "1",
      title: "This is a first exp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      description: "id1, Comune di Padova, Padova",
      owners: "Comune di Padova",
      locations: "Padova",
      category: "Bar",
    },
    {
      id: "2",
      title: "This is a second exp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",

      description: "id2, Comune di Venezia, Venezia",
      owners: "Comune di Venezia",
      locations: "Venezia",
      category: "Bar",
    },
    {
      id: "3",
      title: "This is a third exp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      description: "id3, famiglia Panozzo, Dolomiti",
      owners: "Famiglia Panozzo",
      locations: "Dolomiti",
      category: "Ristorante di Montagna",
    },
    {
      id: "4",
      title: "This is a fourth exp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      description: "id4, Consorzio agrario, Venezia",
      owners: "Consorzio Agrario",
      locations: "Venezia",
      category: "Rifugio",
    },
    {
      id: "5",
      title: "This is a fifth exp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      description: "id5, Comune di Venezia, Venezia",
      owners: "Comune di Venezia",
      locations: "Venezia",
      category: "Hotel",
    },
  ];

  const locations = [...new Set(dummy.map((item) => item.locations))];
  const owners = [...new Set(dummy.map((item) => item.owners))];
  const categories = [...new Set(dummy.map((item) => item.category))];

  const [locationslist, setLocationslist] = useState(locations);
  const [ownerslist, setOwnerslist] = useState(owners);
  const [categorieslist, setCategorieslist] = useState(categories);

  const filterLocations = (e) => {
    setLocationslist(e);
    console.log(e);
    if (!e.length) {
      setLocationslist(locations);
    }
  };
  console.log(locationslist);

  const filterOwners = (e) => {
    setOwnerslist(e);
    if (!e.length) {
      setOwnerslist(owners);
    }
  };
  console.log(ownerslist);

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

  const [expandedKeys, setExpandedKeys] = useState([]);
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  const onExpand = (expandedKeysValue) => {
    console.log("onExpand", expandedKeysValue);
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const filterCategories = (e) => {
    console.log(e);
  };
  console.log(categorieslist);

  const onCheck = (checkedKeysValue) => {
    //console.log("onCheck", checkedKeysValue);
    setCategorieslist(checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
  };

  const filteredExp =
    locationslist === locations &&
    ownerslist === owners &&
    categorieslist === categories
      ? dummy
      : dummy
          .filter((el) => locationslist.includes(el.locations))
          .filter((el) => ownerslist.includes(el.owners))
          .filter((el) => categorieslist.includes(el.category));

  return (
    <Layout>
      <Header className={classes.header}>TITOLO HEADER</Header>

      <Content style={{ padding: "0 20px" }}>
        <Layout>
          <Sider style={{ padding: "24px 0", background: "white" }}>
            <Menu mode="inline" style={{ height: "100%" }}>
              <SubMenu key="sub1" title="Locations">
                <FilterList filterExp={filterLocations} contents={locations} />
              </SubMenu>
              <SubMenu key="sub2" title="Owners">
                <FilterList filterExp={filterOwners} contents={owners} />
              </SubMenu>
              <SubMenu key="sub3" title="Categories">
                <CategoriesList
                  filterExp={filterCategories}
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
          <Content>
            <AllExpList elements={filteredExp} />
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{ textAlign: "center", fontSize: "20px" }}
        className={classes.header}
      >
        Footer prova React app RIR
      </Footer>
    </Layout>
  );
};

export default LayoutModel;
