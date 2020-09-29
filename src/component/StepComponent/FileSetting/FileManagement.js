import React, { Component } from "react";
import { Row, Col, Card, Table, Modal, Button } from "antd";
import { isBrowser } from "react-device-detect";
import {
  DownloadOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
class FileSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textHeader: "",
      visible: false,
      columns: [
        {
          title: "ファイル",
          dataIndex: "name",
        },
        {
          title: "更新日時",
          dataIndex: "modified",
        },
        {
          title: "サイズ",
          dataIndex: "size",
          render: (data) => <span>{data} MB</span>,
        },
        {
          title: "",
          dataIndex: "button",
          render: () => (
            <Row gutter={[16, 16]} style={{ margin: 0 }}>
              <Col>
                <Button icon={<DownloadOutlined />}>ダウンロード</Button>
              </Col>
              <Col>
                <Button icon={<DeleteOutlined />} danger onClick={this.confirm}>
                  削除
                </Button>
              </Col>
            </Row>
          ),
        },
      ],
      dataSource: [
        {
          key: 0,
          name: "Backup 1",
          modified: "7/14/2020, 14:20:11 PM",
          size: 100,
          button: "",
        },
        {
          key: 1,
          name: "Backup 2",
          modified: "7/14/2020, 14:20:11 PM",
          size: 200,
          button: "",
        },
        {
          key: 2,
          name: "Backup 3",
          modified: "7/14/2020, 14:20:11 PM",
          size: 124,
          button: "",
        },
        {
          key: 3,
          name: "File Setting",
          modified: "7/14/2020, 14:20:11 PM",
          size: 23,
          button: "",
        },
      ],
    };
  }
  confirm = () => {
    Modal.confirm({
      title: "本気？",
      icon: <ExclamationCircleOutlined />,
      content: "このファイルを削除してもよろしいですか？",
      okText: "削除",
      cancelText: "キャンセル",
    });
  };
  render() {
    let { columns, dataSource } = this.state;
    return (
      <div className={isBrowser ? "home" : "homeMobile"}>
        <Row>
          <h2 style={{ margin: 0 }}>ファイル管理</h2>
        </Row>
        <Card style={{ width: "100%", marginTop: "24px" }}>
          <Row align="middle" justify="center" gutter={[32, 32]}>
            <Col span={24}>
              <Table
                style={{ width: "100%" }}
                bordered
                dataSource={dataSource}
                columns={columns}
                scroll={{ x: "max-content" }}
              ></Table>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default FileSetting;
