import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  Typography,
  Tag,
  PageHeader,
  Button,
  Select,
  Input,
  Radio,
  Drawer,
} from 'antd';
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
  xxl: 4,
  style: { marginBottom: 24 },
};

class Home extends Component {
  state = {
    visible: false,
    list: [
      {
        uid:1,
        title: '测试相册',
        type: 1,
        cover: '',
      },
      {
        uid:2,
        title: '五年一班相册',
        type: 1,
        cover: '',
      },
      {
        uid:3,
        title: '2017年秋季运动会集锦2017年秋季运动会集锦',
        type: 2,
        cover: '',
      },
    ],
  };

  componentDidMount() {}

  listEl() {
    return this.state.list.map(item => {
      return (
        <Col {...listProps} key={item.uid}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="http://3999n.rzlt.net/d/file/96kaifa/201904211221/5cb058ac190df.jpg"
              />
            }
          >
            <Tag
              style={{ margin: 0, float: 'right' }}
              color={item.type === 1 ? '#2db7f5' : '#87d068'}
            >
              {item.type === 1 ? '班' : '校'}
            </Tag>
            <Text ellipsis style={{display: 'block'}} >{item.title}</Text>
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
            <Select defaultValue="lucy" key="1" style={{ minWidth: '200px' }}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>,
            <Search
              key="2"
              style={{ width: '200px' }}
              placeholder="input search text"
              onSearch={value => console.log(value)}
            />,
            <RadioGroup defaultValue="a" style={{ marginRight: '30px' }} key="3">
              <RadioButton value="a">全部</RadioButton>
              <RadioButton value="b">校园相册</RadioButton>
              <RadioButton value="c">班级相册</RadioButton>
            </RadioGroup>,
            <Button
              key="4"
              onClick={() => {
                this.state.visible = true;
              }}
            >
              上传照片
            </Button>,
          ]}
        />
        <div style={{ margin: '24px 0' }}>
          <Row gutter={24} type="flex">
            {this.listEl()}
          </Row>
        </div>
        <Drawer title="Basic Drawer" placement="bottom" visible={this.state.visible}>
          12121211221
        </Drawer>
      </div>
    );
  }
}

export default Home;
