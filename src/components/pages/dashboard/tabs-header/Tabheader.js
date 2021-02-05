import Tab from "../tab/Tab";
import Title from "../title/Title";

const TabHeader = () => (
  <div className="tabs_header_wrap">
    <Title title={"Courses"} />
    <div className="tabs_wrap">
      <Tab title={"Popular"} />
      <Tab title={"Favorite"} />
      <Tab title={"New"} />
    </div>
  </div>
);

export default TabHeader;
