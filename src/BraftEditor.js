import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'
import axios from 'axios'
import Qs from 'qs'
import moment from 'moment'
import { Select, Row, Col ,Button} from 'antd';
import AppGlobal from './AppGlobal'

export default class BasicDemo extends React.Component {

  state = {
    模块名称列表: [
      '假山工程', '园林工程', '驳岸工程',
      '千层石', '假山石料', '龟纹石', '草坪石', '刻字石', '景观石', '泰山石', '太湖石', '石槽石磨', '灵璧石', '鹅软石',
      '行业资讯', '企业资讯',
      '关于我们'
    ],
    editorState: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>'), // 设置编辑器初始内容
    outputHTML: '<p></p>',
    myHTML: '',
    tittle: '',
    type: '',
  }

  componentDidMount() {
    this.isLivinig = true
    // 3秒后更改编辑器内容
    setTimeout(this.setEditorContentAsync, 3000)
  }

  componentWillUnmount() {
    this.isLivinig = false
  }

  handleChange = (editorState) => {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML()
    })
  }

  setEditorContentAsync = () => {
    this.isLivinig && this.setState({
      editorState: BraftEditor.createEditorState('')
    })
  }

  handleChangeBanShiRiQi = (value) => {
    this.setState({ type: value });
  }

  handleChangeBanShiRiQi2 = (e) => {
    this.setState({ tittle: e.target.value });
  }

  render() {

    const { editorState, outputHTML, myHTML } = this.state

    const { Option } = Select;

    return (
      <div>
        <Row>
          <Col span={24}>
            <label>模块名称:</label>
            <Select defaultValue="" style={{ width: 240 }} onChange={this.handleChangeBanShiRiQi}>
              {this.state.模块名称列表.map((item) => {
                return (
                  <Option value={item}>{item}</Option>
                )
              })}
            </Select>
            <label>新闻标题:</label>
            <input type="txt" defaultValue="" onChange={this.handleChangeBanShiRiQi2} />
            <div className="editor-wrapper">
              <BraftEditor
                value={editorState}
                onChange={this.handleChange}
              />
            </div>
            <Button
              type="primary"
              onClick={e => {
                this.setState({
                  myHTML: this.state.outputHTML
                });
              }}>预览文章</Button>

            <h5>预览文章</h5>
            <div dangerouslySetInnerHTML={{ __html: myHTML }} />
            <Button
              type="primary"
              onClick={e => {
                let self = this;
                let data = {
                  "article": self.state.outputHTML,
                  "tittle": self.state.tittle,
                  "type": self.state.type,
                  "now": moment().format('YYYY-MM-DD HH:mm:ss')
                }
                axios({
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                  },
                  method: 'post',
                  url: AppGlobal.url.rd_updata,
                  data: Qs.stringify(data)
                }).then(function (response) {
                  console.log(response)
                  self.setState({
                    myHTML: response.data
                  });
                })
                  .catch(function (error) {
                    console.log(error);
                  });
              }
              }>上传文章</Button>
          </Col>
        </Row>

      </div>
    )

  }

}