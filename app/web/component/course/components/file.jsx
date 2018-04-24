import React, { Component } from 'react';
import { Collapse, List, Avatar, Row, Col, Button, Icon, Popconfirm } from 'antd';

import { fileListApi, courseListApi } from 'service/course'
import { linkTo } from 'utils'

const Panel = Collapse.Panel;
const mockFileList = [{
    file_id: '56db8e9f08ba43d8b2ed15c13ecef41c',
    create_time: '2018-04-15 13:13:03',
    filename: 'Jessy_HSBC.doc',
    url: '/fileDir/u/2018-03-13/dc0b7b03e6ce4e89866bb61892209492Jessy_HSBC.doc',
}];
const courseList = [
    {
        course_id:24,
        update_time:null,
        tea_id:'20141002426',
        create_time:'2018-04-12 21:54:28',
        course_name:'DB2DB2DB2DB2DB2',
        tea_name:'tDiang',
        introduction:'11255'
    },
    {
        course_id:25,
        update_time:null,
        tea_id:'20141002426',
        create_time:'2018-04-12 21:54:28',
        course_name:'DB2DB2DB2DB2',
        tea_name:'tDiang',
        introduction:'11255'
    },
    {
        course_id:26,
        update_time:null,
        tea_id:'20141002426',
        create_time:'2018-04-12 21:54:28',
        course_name:'DB2DB2DB2DB2DB2DB2DB2DB2',
        tea_name:'tDiang',
        introduction:'11255'
    }
]

export default class FileList extends Component {

  constructor(props) {
    super(props);
    this.state = {
        course: courseList
    }

  }

  componentWillMount() {
      const { course } = this.state;

    // 想办法获取到course_id去请求第一门课程的文件列表
    this.fetchFileListById(course[0].course_id);

    

  }

  fetchFileListById(course_id) {

    console.log(course_id)
    const newData = [...this.state.course];

    console.log(newData )
    const target = newData.filter( item => item.course_id == course_id)[0];

    console.log('target', target)

    if(target.fileList) return;

    // 没有数据  需要请求
    // fileListApi({course_id}).then( res => {

    //     target.fileList = res
    //     this.setState({
    //         course: newData
    //     })
    // })

    console.log('request')
    
    target.fileList = mockFileList;

    this.setState({
        course: newData
    })

  }

  togglePannel(course_id) {
    console.log('course_id', course_id)

    // 切换pannel请求文件数据
    if(course_id) {
        this.fetchFileListById(course_id);
    }
  }

  deleteFile(file_id) {


  }

  lintToUpload(course_id) {
    linkTo(`upload?cid=${course_id}`)
  }
  render() {
    const { course } = this.state;
    return <div className="tab-container">
      
        <Collapse style={{marginTop: '24px'}} defaultActiveKey={[course[0].course_id.toString()]} onChange={this.togglePannel.bind(this)} accordion>
          {
            course ? course.map( (item, index) => {
                return <Panel header={item.course_name} key={item.course_id}>
                    <div className="btn-right-align">
                      <Button type="primary" onClick={this.lintToUpload.bind(this, item.course_id)}><Icon type="upload" />上传资料</Button>
                    </div>
                    <List
                        itemLayout="horizontal"
                        dataSource={item.fileList}
                        renderItem={file => (
                            <List.Item actions={[<Popconfirm title="确认删除该文件？" okText="确认" cancelText="取消"><a onClick={this.deleteFile.bind(this, file.file_id)}>删除</a></Popconfirm>]}>
                                <List.Item.Meta 
                                title={<a href={file.url}>{file.filename}</a>}/>
                            </List.Item>
                        )}
                    />
                </Panel>
            }) : null
          }
        </Collapse>
    </div>
  }
}
