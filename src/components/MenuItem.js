import { Menu } from "antd";

const MenuItem = ({ items }) => {
  return items?.map((item) => {
    return (
      <Menu.Item key={item.id}>
        <a href={item.url} target="_blank" rel="noreferrer">
          {`${item.broadcaster_name}- ${item.title}`}
        </a>
      </Menu.Item>
    );
  });
};

export default MenuItem;
