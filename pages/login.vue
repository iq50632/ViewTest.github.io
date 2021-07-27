<template>
  <div style="text-align:auto">
    <div style="text-align: center; margin: 20px 70px">
      <Steps :current="current" style="width:80%">
        <Step title="註冊" icon="ios-person"></Step>
        <Step title="基本資料" icon="ios-camera"></Step>
        <Step title="上傳頭像" icon="ios-camera"></Step>
        <Step title="完成" icon="ios-mail"></Step>
      </Steps>
    </div>
    <div v-show="current==0">
      <h1>合約同意書</h1>
      本人同意合約同意書
      <CheckboxGroup v-model="Contract">
        <Checkbox label="同意"></Checkbox>
        <Checkbox label="同意自己同意"></Checkbox>
      </CheckboxGroup>
      <button type="primary" @click="message('warning')">同意</button>
    </div>
    <Row v-show="current==1">
      <Col span="3">
      </Col>
      <Col flex="auto">
      <Form ref="formValidate" :model="user" :rules="user" :label-width="80">
        <FormItem label="姓名">
          <Input v-model="user.name" placeholder="請輸入你的姓名"></Input>
        </FormItem>
        <FormItem label="帳號">
          <Input v-model="user.account" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="密碼">
          <Input v-model="user.password" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="確認密碼">
          <Input v-model="password" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="縣市">
          <Select v-model="user.city[0]">
            <Option value="0">新北市</Option>
            <Option value="1">台北市</Option>
            <Option value="2">桃園市</Option>
          </Select>
          <Select v-model="user.city[1]">
            <Option value="0">板橋區</Option>
            <Option value="1">樹林區</Option>
            <Option value="2">新莊區</Option>
          </Select>
        </FormItem>
        <FormItem label="生日">
          <DatePicker type="date" placeholder="請輸入你的生日" v-model="user.birthday"></DatePicker>
        </FormItem>
        <FormItem label="性別">
          <RadioGroup v-model="user.sax">
            <Radio label="0">男</Radio>
            <Radio label="1">女</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="興趣">
          <CheckboxGroup v-model="user.interest">
            <Checkbox label="吃"></Checkbox>
            <Checkbox label="喝"></Checkbox>
            <Checkbox label="玩"></Checkbox>
            <Checkbox label="睡"></Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem label="自我介紹">
          <Input v-model="user.self" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="讓大家認識你吧！"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit(user)">Submit</Button>
          <Button style="margin-left: 8px">Cancel</Button>
        </FormItem>
      </Form>
      </Col>
      <Col span="3">
      </Col>
    </Row>
    <div v-show="current==2">
      <Upload action="//jsonplaceholder.typicode.com/posts/">
        <Button icon="ios-cloud-upload-outline">Upload files</Button>
      </Upload>
    </div>
    <div v-show="Next">
      <button type="primary" @click="pre">上一步</button>
      <button type="primary" @click="next">下一步</button>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'user',
    data() {
      return {
        user: {
          name: '',
          account: '',
          password: '',
          city: ['', ''],
          birthday: '',
          sax: '',
          interest: [],
          self: ''
        },
        password: '',
        current: 0,
        Contract: [],
        Next: false
      }
    },
    methods: {
      next() {
        if (this.current < 3) {
          this.current += 1;
        }
      },
      pre() {
        if (this.current > 0) {
          this.current -= 1;
        }
      },
      message(type) {
        if (this.Contract.length == 2) {
          this.current += 1;
        } else {
          this.$Message[type]({
            background: true,
            content: '請勾選合約同意書'
          });
        }
      },
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
    }
  }

</script>
