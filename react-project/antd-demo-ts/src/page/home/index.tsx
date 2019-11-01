import React from 'react';
import { Layout, Row, Col, Table, Divider, Input, Button, Icon } from 'antd';

import { buyList, buy } from '../../component/tableTh/home';

import LHeader from '../../component/header/lHeader';
import OrderHeader from '../../component/order/header';
import Upload from '../../component/upload/uploads'


import './index.css';
const { Header, Content, Sider } = Layout;
const { Column, ColumnGroup } = Table;

export interface State {
    data: Array<object>
    tableTh: Array<object>
}

export interface Props {

}

export default class Home extends React.Component<Props, State>{
    public constructor(props: Props) {
        super(props);

        this.state = {
            data: [],
            tableTh: [
                {
                    key: 1,
                    time: '2019-10-23',
                    serial: '001',
                    supilerName: '老王',
                    userName: 'jack',
                    id: 1
                },
                {
                    key: 2,
                    time: '2019-10-24',
                    serial: '002',
                    supilerName: '老王',
                    userName: 'rose',
                    id: 2
                },
            ]
        };

        this.btnChange = this.btnChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    public uploadChange = (data: any) => {
        console.log(data);
    }

    public btnChange = (name: string) => {
        console.log(name);
    }

    public onSearch = (val: any): void => {
        console.log('search', val);
    }

    public render() {
        let data = [
            {
                name: 'companyId',
                CNname: '供应商',
                rightRender: (data: any) => <Input placeholder="请填写供应商" />
            },
            {
                name: 'date',
                CNname: '单据日期',
                isRequired: true,
            },
            {
                name: 'busUserId',
                CNname: '业务员',
                isRequired: true,
                rightRender: (data: any) => <Input placeholder="请填写业务员" />
            },
            {
                name: 'date2',
                CNname: '预交日期',
            },
            {
                name: 'attachmentList',
                CNname: '附件',
                span: 24,
                rightRender: (data: any) => {
                    return <Upload
                        action=""
                        onChange={this.uploadChange}/>
                }
            },
        ]

        let dataSource = {
            date: '2019-11-01: 14:3',
            date2: '2019-10-31'
        }


        return(
            <section>
                <Layout>
                    <Header className="t-header">
                        <LHeader btnChange={this.btnChange} btns={['导出', '导入']} />
                    </Header>
                    <Content>
                        <Row>
                            <OrderHeader onSearch={this.onSearch} field={data} dataSource={dataSource}></OrderHeader>
                        </Row>

                        <Table
                            dataSource={this.state.tableTh}>
                            {
                                buyList.map((item) => {
                                    return <Column title={item.title} dataIndex={item.dataIndex} key={item.key} ></Column>
                                })
                            }
                        </Table>
                    </Content>
                </Layout>
            </section>
        )
    }
}