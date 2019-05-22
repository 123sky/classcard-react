import React, { Component } from 'react';
import { Row, Col, Icon, Card, Avatar, Typography } from 'antd';

const { Meta } = Card;
const { Title } = Typography;

const settingItemProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 8,
  xl: 6,
  style: { marginBottom: 24 },
};

class Home extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div>
        <Title level={3}>媒体内容</Title>
        <Row gutter={24} type="flex" style={{ marginBottom: '24px' }}>
          <Col span={6}>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[<Icon type="setting" />, <Icon type="edit" />]}
            >
              <Meta
                title={<Title level={4}>图片</Title>}
                description="进行相册视频管理，您可以上传相册、视频用于电子班牌风采板块的展示"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[<Icon type="setting" />, <Icon type="edit" />]}
            >
              <Meta
                title={<Title level={4}>视频</Title>}
                description="进行相册视频管理，您可以上传相册、视频用于电子班牌风采板块的展示"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[<Icon type="setting" />, <Icon type="edit" />]}
            >
              <Meta
                title={<Title level={4}>通知</Title>}
                description="进行相册视频管理，您可以上传相册、视频用于电子班牌风采板块的展示"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[<Icon type="setting" />, <Icon type="edit" />]}
            >
              <Meta
                title={<Title level={4}>新闻</Title>}
                description="进行相册视频管理，您可以上传相册、视频用于电子班牌风采板块的展示"
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={24} type="flex" style={{ marginBottom: '24px' }}>
          <Col span={12}>
            <Title level={3}>媒体内容</Title>
            <Row gutter={24} type="flex">
              <Col span={12}>
                <Card
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[<Icon type="setting" />, <Icon type="edit" />]}
                >
                  <Meta
                    title={<Title level={4}>考勤</Title>}
                    description="进行相册视频管理，您可以上传相册、视频用于电子班牌风采板块的展示"
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[<Icon type="setting" />, <Icon type="edit" />]}
              >
                <Meta
                  title={<Title level={4}>请假</Title>}
                  description="进行相册视频管理，您可以上传相册、视频用于电子班牌风采板块的展示"
                />
              </Card>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <Title level={3}>考勤请假</Title>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[<Icon type="setting" />, <Icon type="edit" />]}
            >
              <Meta
                title={<Title level={4}>成绩</Title>}
                description="进行相册视频管理，您可以上传相册、视频用于电子班牌风采板块的展示"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Title level={3}>模式设置</Title>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[<Icon type="setting" />, <Icon type="edit" />]}
            >
              <Meta
                title={<Title level={4}>模式</Title>}
                description="进行相册视频管理，您可以上传相册、视频用于电子班牌风采板块的展示"
              />
            </Card>
          </Col>
        </Row>
        <Title level={3}>班牌定制</Title>
        <Row gutter={24} type="flex">
          <Col {...settingItemProps}>
            <Card>
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="图片"
                description="进行相册视频管理"
              />
            </Card>
          </Col>
          <Col {...settingItemProps}>
            <Card>
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="时间"
                description="进行相册视频管理"
              />
            </Card>
          </Col>
          <Col {...settingItemProps}>
            <Card>
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="天气"
                description="进行相册视频管理"
              />
            </Card>
          </Col>
          <Col {...settingItemProps}>
            <Card>
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="皮肤"
                description="进行相册视频管理"
              />
            </Card>
          </Col>
          <Col {...settingItemProps}>
            <Card>
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="定时"
                description="进行相册视频管理"
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
