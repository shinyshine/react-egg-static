import React, { Component } from 'react';
import { Collapse, List, Avatar, Row, Col, Button, Icon, Popconfirm, Spin, message } from 'antd';

import { fileListApi } from 'service/course'
import { getCourseApi } from 'service/teacher'
import { deleteFileApi } from 'service/file'
import { linkTo } from 'utils'
import { server } from 'config/config.server'

const Panel = Collapse.Panel;

const FinishedFile = ({ item }) => (
    <div className="ant-upload-list-item ant-upload-list-item-done">
        <div className="ant-upload-list-item-info">
            <span><i className="anticon anticon-paper-clip"></i>
            <span className="ant-upload-list-item-name" title={item.filename}><a href={`${server}${item.url}`}>{item.filename}</a></span></span>
        </div>
    </div> 
)
export default class FileList extends Component {

  constructor(props) {
    super(props);
    this.state = {}

  }

  componentWillMount() {

    getCourseApi().then( res => {
        console.log(res)

        const data = res.data.data;
        this.setState({
            course: data ? data.list : []
        })

        if( data && data.list.length ) {
            // 想办法获取到course_id去请求第一门课程的文件列表
            this.fetchFileListById(data.list[0].course_id)

        }
    })

    

  }

  fetchFileListById(course_id) {

    console.log(course_id)
    const newData = [...this.state.course];

    console.log(newData )
    const target = newData.filter( item => item.course_id == course_id)[0];

    console.log('target', target)

    if(target.fileList) return;

    // 没有数据  需要请求
    fileListApi({course_id}).then( res => {
        console.log('file list', res)
        const data = res.data.data;

        target.fileList = data ? data.list : []
        this.setState({
            course: newData
        })
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
    console.log('file id', file_id)

    deleteFileApi({ file_id }).then( res => {
        if(res.data.success) {
            message.success('成功删除');
            window.location.reload()
        } else {
            message.error('操作失败，请稍后重试')
        }
    })

  }

  linkToUpload({ course_id, course_name }) {
    linkTo(`/upload?cid=${course_id}&c_name=${course_name}`)
  }
  render() {
    const { course } = this.state;
    return <div className="tab-container">
    {
        course && course.length ? <Collapse style={{marginTop: '24px'}} defaultActiveKey={[course[0].course_id.toString()]} onChange={this.togglePannel.bind(this)} accordion>
        {
          course.map( (item, index) => {
              return <Panel header={item.course_name} key={item.course_id}>
                  <div className="btn-right-align">
                    <Button type="primary" onClick={this.linkToUpload.bind(this, item)}><Icon type="upload" />上传资料</Button>
                  </div>
                  
                  <List
                      loading={!item.fileList}
                      locale={{emptyText: '暂无该课程的相关资料'}}
                      itemLayout="horizontal"
                      dataSource={item.fileList}
                      renderItem={file => (
                          <List.Item actions={[<Popconfirm title="确认删除该文件？" okText="确认" cancelText="取消" onConfirm={this.deleteFile.bind(this, file.file_id)}><a>删除</a></Popconfirm>]}>
                              <List.Item.Meta 
                                title={<strong>{file.title}</strong>}
                                description={
                                    <div>
                                        <p>{file.introduction}</p>
                                        <FinishedFile item={file} />
                                    </div>
                                }
                              />
                          </List.Item>
                      )}
                  />
              </Panel>
          })
        }
      </Collapse>
      : ( course && course.length === 0 ? <div style={{textAlign: 'center'}}>暂无课程</div> : <div style={{textAlign: 'center'}}><Spin /></div>)
    }
      
        
    </div>
  }
}
