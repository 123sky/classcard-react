import React, { Component } from 'react';
import { Row, Col, Card, Typography, Tag, PageHeader, Button, Select, Input, Radio, Drawer } from 'antd';
import style from './List.less';

const { Text } = Typography;
const { Option } = Select;
const { Search } = Input;
const { Group: RadioGroup, Button: RadioButton } = Radio;

const listProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 8,
  xl: 6,
  style: { marginBottom: 24 },
};

class Home extends Component {
  state = {
    visible: false,
    list: [
      {
        title: '测试相册',
        type: 1,
        cover: '',
      },
      {
        title: '五年一班相册',
        type: 1,
        cover: '',
      },
      {
        title: '2017年秋季运动会集锦',
        type: 2,
        cover: '',
      },
    ],
  };

  componentDidMount() { }

  listEl() {
    return this.state.list.map(item => {
      return (
        <Col {...listProps}>
          <Card
            hoverable
            cover={
              <img alt="example" src="data:image/jpeg;base64,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" />
            }
          >
            <Text ellipsis>{item.title}</Text>
            <Tag className={style.tag} color={item.type === 1 ? '#2db7f5' : '#87d068'}>
              {item.type === 1 ? '班' : '校'}
            </Tag>
          </Card>
        </Col>
      );
    });
  }

  render() {
    return (
      <div>
        <PageHeader
          title="图片管理"
          extra={[
            <Select defaultValue="lucy"
              key="1"
              style={{ minWidth: '200px' }}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>,
            <Search
              key="2" style={{ width: '200px' }}
              placeholder="input search text"
              onSearch={value => console.log(value)}
            />,
            <RadioGroup defaultValue="a" style={{ marginRight: '30px' }}
              key="3">
              <RadioButton value="a">全部</RadioButton>
              <RadioButton value="b">校园相册</RadioButton>
              <RadioButton value="c">班级相册</RadioButton>
            </RadioGroup>,
            <Button
              key="4" onClick={() => { this.state.visible = true }}>上传照片</Button>,
          ]}
        />
        <div style={{ margin: '24px 0' }}>
          <Row gutter={24} type="flex">
            {this.listEl()}
          </Row>
        </div>
        <Drawer
          title="Basic Drawer"
          placement="bottom"
          visible={this.state.visible}
        >
          12121211221
        </Drawer>
      </div>
    );
  }
}

export default Home;
